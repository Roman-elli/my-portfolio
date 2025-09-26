import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header component", () => {
  it("renders correctly all logo & buttons", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(<Header mode="light" toggleMode={toggleModeMock} />);

    // Assert
    expect(screen.getByTestId("logo-image-id")).toBeInTheDocument();
    expect(screen.getByTestId("download-button-id")).toBeInTheDocument();
    expect(screen.getByTestId("light-dark-button-id")).toBeInTheDocument();
  });

  it("call togglemode function when light&dark mode button is clicked", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(<Header mode="dark" toggleMode={toggleModeMock} />);
    fireEvent.click(screen.getByTestId("light-dark-button-id"));

    // Assert
    expect(toggleModeMock).toHaveBeenCalledTimes(1);
  });

  it("download CV button calls window.open with correct URL", () => {
    // Arrange
    const toggleModeMock = vi.fn();
    const openMock = vi.fn();
    window.open = openMock;

    // Act
    render(<Header mode="light" toggleMode={toggleModeMock} />);
    fireEvent.click(screen.getByTestId("download-button-id"));

    // Assert
    expect(openMock).toHaveBeenCalledTimes(1);
    expect(openMock).toHaveBeenCalledWith("/my-cv.pdf", "_blank");
  });

  it("renders sun icon when mode is light", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(<Header mode={"light"} toggleMode={toggleModeMock} />);

    // Assert
    expect(
      screen.getByTestId("light-dark-button-id").querySelector("svg"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("sun-icon-id")).toBeInTheDocument();
    expect(screen.queryByTestId("moon-icon-id")).not.toBeInTheDocument();
  });

  it("renders moon icon when mode is dark", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(<Header mode={"dark"} toggleMode={toggleModeMock} />);

    // Assert
    expect(
      screen.getByTestId("light-dark-button-id").querySelector("svg"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("moon-icon-id")).toBeInTheDocument();
    expect(screen.queryByTestId("sun-icon-id")).not.toBeInTheDocument();
  });
});
