import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBox from ".";

describe("Select component", () => {
  it("Test input value", () => {
    const setSearchValueMock = jest.fn();
    const { getByTestId } = render(
      <SearchBox
        searchValue="1234"
        setSearchValue={setSearchValueMock}
        onClickSearch={() => {}}
      />
    );
    const component = getByTestId("search-input");
    expect(component).toHaveValue("1234");
  });

  it("Test onChange handler", () => {
    const setSearchValueMock = jest.fn();
    const { getByTestId } = render(
      <SearchBox
        searchValue="1234"
        setSearchValue={setSearchValueMock}
        onClickSearch={() => {}}
      />
    );
    const component = getByTestId("search-input");
    fireEvent.change(component, { target: { value: "9876" } });
    expect(setSearchValueMock).toHaveBeenLastCalledWith("9876");
  });

  it("Test search button onClick handler", () => {
    const onClickSearchMock = jest.fn();
    const { getByTestId } = render(
      <SearchBox
        searchValue="1234"
        setSearchValue={() => {}}
        onClickSearch={onClickSearchMock}
      />
    );
    const component = getByTestId("search-input-btn");
    fireEvent.click(component);
    expect(onClickSearchMock).toHaveBeenCalledTimes(1);
  });
});
