import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("renders correctly all logo & buttons", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(
      <Header
        mode="light"
        isAnimating={false}
        toggleMode={toggleModeMock}
        isStart={false}
      />,
    );

    // Assert
    expect(screen.getByTestId("logo-image-id")).toBeInTheDocument();
    expect(screen.getByTestId("download-button-id")).toBeInTheDocument();
    expect(screen.getByTestId("light-dark-button-id")).toBeInTheDocument();
  });

  it("call togglemode function when light&dark mode button is clicked", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(
      <Header
        mode="dark"
        isAnimating={false}
        toggleMode={toggleModeMock}
        isStart={false}
      />,
    );
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
    render(
      <Header
        mode="light"
        isAnimating={false}
        toggleMode={toggleModeMock}
        isStart={false}
      />,
    );
    fireEvent.click(screen.getByTestId("download-button-id"));

    // Assert
    expect(openMock).toHaveBeenCalledTimes(1);
    expect(openMock).toHaveBeenCalledWith("/my-cv.pdf", "_blank");
  });

  it("renders sun icon when mode is light", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(
      <Header
        mode={"light"}
        isAnimating={false}
        toggleMode={toggleModeMock}
        isStart={false}
      />,
    );

    // Assert
    expect(
      screen.getByTestId("light-dark-button-id").querySelector("svg"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("sun-icon-id")).toHaveClass("opacity-100");
    expect(screen.getByTestId("moon-icon-id")).toHaveClass("opacity-0");
  });

  it("renders moon icon when mode is dark", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(
      <Header
        mode={"dark"}
        isAnimating={false}
        toggleMode={toggleModeMock}
        isStart={false}
      />,
    );

    // Assert
    expect(
      screen.getByTestId("light-dark-button-id").querySelector("svg"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("moon-icon-id")).toHaveClass("opacity-100");
    expect(screen.getByTestId("sun-icon-id")).toHaveClass("opacity-0");
  });

  it("disable light&dark mode button when isAnimating is true", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(
      <Header
        mode={"dark"}
        isAnimating={true}
        toggleMode={toggleModeMock}
        isStart={false}
      />,
    );

    // Assert
    expect(screen.getByTestId("light-dark-button-id")).toBeDisabled();
  });

  it("stays above the screen when reload page", () => {
    // Arrange
    const toggleModeMock = vi.fn();

    // Act
    render(
      <Header
        mode={"light"}
        isAnimating={false}
        toggleMode={toggleModeMock}
        isStart={true}
      />,
    );

    // Assert
    expect(screen.getByTestId("header-id")).toHaveClass("translate-y-[-20vh]");
  });
});
