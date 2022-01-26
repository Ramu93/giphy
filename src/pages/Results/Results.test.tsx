import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, getAllByAltText, render } from "@testing-library/react";
import Result from "./";

describe("Results page", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("Search input should be available", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Result />
      </BrowserRouter>
    );
    const component = getByTestId("search-input");
    expect(component).toBeVisible();
  });
});
