import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Search page - test URL path", () => {
    window.history.pushState({}, "Search", "/search");
    render(<App />);
    expect(location.pathname).toEqual("/search");
  });

  it("Default path - should redirect to search", () => {
    window.history.pushState({}, "Search", "/");
    render(<App />);
    expect(location.pathname).toEqual("/search");
  });

  it("Results page without search key should redirect to search", () => {
    window.history.pushState({}, "Search", "/results");
    render(<App />);
    expect(location.pathname).toEqual("/search");
  });

  it("Search page - test for logo", () => {
    const { getByTestId } = render(<App />);
    const component = getByTestId("search-page-logo");
    expect(component).toBeVisible();
  });

  it("Search page firing search - should redirect to results page with search key", () => {
    const searchKey = "test";

    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    const { getByTestId } = render(<App />);
    const searchComponent = getByTestId("search-input");
    fireEvent.change(searchComponent, { target: { value: searchKey } });
    const searchBtnComponent = getByTestId("search-input-btn");
    fireEvent.click(searchBtnComponent);

    expect(location.pathname).toEqual(`/results/${searchKey}`);
  });
});
