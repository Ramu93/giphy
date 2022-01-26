import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/SearchBox";
import paths from "../../constants/paths";
import { Logo, SearchContainer, SearchContent } from "./styles";

type SearchType = {};

const Search: FC<SearchType> = ({}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`${paths.RESULTS}/${searchValue}`);
  };

  return (
    <SearchContainer>
      <SearchContent>
        <Logo data-testid="search-page-logo">Giphy</Logo>
        <SearchBox
          onClickSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </SearchContent>
    </SearchContainer>
  );
};

export default Search;
