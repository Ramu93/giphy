import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from ".";

describe("Modal component", () => {
  it("Test modal content invisible", () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Modal header="Test Header" onClose={onCloseMock} visible={false}>
        <div data-testid="model-test-content"></div>
      </Modal>
    );
    const component = getByTestId("model-test-content");
    expect(component).not.toBeVisible();
  });

  it("Test modal content visible", () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Modal header="Test Header" onClose={onCloseMock} visible={true}>
        <div data-testid="model-test-content"></div>
      </Modal>
    );
    const component = getByTestId("model-test-content");
    expect(component).toBeVisible();
  });

  it("Test modal header", () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Modal header="Test Header" onClose={onCloseMock} visible={true}>
        <div data-testid="model-test-content"></div>
      </Modal>
    );
    const component = getByTestId("modal-header");
    expect(component).toContainHTML("Test Header");
  });

  it("Test modal close should be visible", () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Modal header="Test Header" onClose={onCloseMock} visible={true}>
        <div data-testid="model-test-content"></div>
      </Modal>
    );
    const component = getByTestId("modal-close-btn");
    expect(component).toBeVisible();
  });

  it("Test modal close onClick handler", () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Modal header="Test Header" onClose={onCloseMock} visible={true}>
        <div data-testid="model-test-content"></div>
      </Modal>
    );
    const component = getByTestId("modal-close-btn");
    fireEvent.click(component);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
