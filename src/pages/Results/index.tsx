import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  LoaderContainer,
  ResultsContainer,
  StickyContainer,
  Column,
  NoData,
} from "./styles";
import SearchBox from "../../components/SearchBox";
import { search } from "../../services/search";
import { ResultData, ResultsResponse } from "./result.interface";
import Thumbnail from "./Thumbnail";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Rendition from "../../components/Rendition";

type ResultsProps = {};

const Results: FC<ResultsProps> = ({}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [results, setResults] = useState<ResultData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ResultData>();
  const [hasNoData, setHasNoData] = useState<boolean>(false);
  const loader = useRef(null);

  const params = useParams();
  const navigate = useNavigate();

  const handleSearch = () => {
    // reset state on new search
    setOffset(0);
    setTotalCount(0);
    setResults([]);
    setQuery(searchValue);
    setHasNoData(false);
    navigate(`/results/${searchValue}`);
  };

  const fetchResults = async () => {
    if (totalCount === 0 || offset < totalCount) {
      setIsLoading(true);
      const response: ResultsResponse = await search(query.trim(), offset);
      if (response.totalCount === 0) {
        setHasNoData(true);
      }
      setTotalCount(response.totalCount);
      setResults([...results, ...response.data]);
      setIsLoading(false);
      setOffset(offset + response.count);
    }
  };

  // if search value exists in param then update the state and fire search operation
  useEffect(() => {
    if (params.searchValue) {
      setSearchValue(params.searchValue);
      setQuery(params.searchValue);
    }
  }, []);

  const fetchMore = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !hasNoData) {
        !isLoading && fetchResults();
      }
    },
    [query, offset, isLoading, hasNoData]
  );

  // side effect taking care of pagination - lazy loading of the results
  useEffect(() => {
    const loaderCurrent = loader.current;
    const option = {
      root: null,
      rootMargin: "300px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(fetchMore, option);
    if (loaderCurrent) {
      observer.observe(loaderCurrent);
    }

    return () => {
      if (loaderCurrent) {
        observer.unobserve(loaderCurrent);
      }
    };
  }, [fetchMore]);

  // side effect for setting the modal visible when a thumbnail is clicked
  useEffect(() => {
    if (selectedItem) {
      setIsModalVisible(true);
    }
  }, [selectedItem]);

  return (
    <>
      <StickyContainer>
        <SearchBox
          onClickSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </StickyContainer>
      <ResultsContainer>
        {results.map((result, index) => (
          <Column key={index.toString()} data-testid="result-column">
            <Thumbnail
              data={result}
              onClick={(data: ResultData) => {
                setSelectedItem(data);
              }}
            />
          </Column>
        ))}
      </ResultsContainer>
      {hasNoData && <NoData>No results matching your query.</NoData>}
      <LoaderContainer ref={loader}>{isLoading && <Loader />}</LoaderContainer>
      <Modal
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
          setSelectedItem(undefined);
        }}
        header="Renditions"
      >
        {isModalVisible && <Rendition images={selectedItem!.images} />}
      </Modal>
    </>
  );
};

export default Results;
