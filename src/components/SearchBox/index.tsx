import React, { FC } from "react";
import { FaSearch } from "react-icons/fa";
import {
  SearchContainer,
  InputContainer,
  Input,
  ButtonContainer,
} from "./styles";

type SearchBoxProps = {
  searchValue: string;
  setSearchValue: Function;
  onClickSearch: Function;
};

const SearchBox: FC<SearchBoxProps> = ({
  onClickSearch,
  searchValue,
  setSearchValue,
}) => {
  return (
    <SearchContainer>
      <InputContainer>
        <Input
          data-testid="search-input"
          placeholder="Search"
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && searchValue !== "") {
              onClickSearch();
            }
          }}
          value={searchValue}
        />
        <ButtonContainer
          data-testid="search-input-btn"
          onClick={() => {
            if (searchValue !== "") {
              onClickSearch();
            }
          }}
        >
          <FaSearch color="white" size={40} />
        </ButtonContainer>
      </InputContainer>
    </SearchContainer>
  );
};

export default SearchBox;
