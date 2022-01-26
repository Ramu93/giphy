import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from ".";

describe("Select page", () => {
  it("Test if logo is visible", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    const component = getByTestId("search-page-logo");
    expect(component).toBeVisible();
  });

  it("Test search input is visible", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    const component = getByTestId("search-input");
    expect(component).toBeVisible();
  });

  //   it("Test search button onClick handler", () => {
  //     const onClickSearchMock = jest.fn();
  //     const { getByTestId } = render(<Search />);
  //     const component = getByTestId("search-input-btn");
  //     fireEvent.click(component);
  //     expect(onClickSearchMock).toHaveBeenCalledTimes(1);
  //   });
});
