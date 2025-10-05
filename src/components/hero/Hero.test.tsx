import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  it("render all background texts and writer", () => {
    // Act
    render(<Hero mode={"light"} isStart={false} />);

    // Assert
    expect(screen.getByTestId("hi-test-id")).toBeInTheDocument();
    expect(screen.getByTestId("name-test-id")).toBeInTheDocument();
    expect(screen.getByTestId("writer-test-id")).toBeInTheDocument();
  });

  it("render right color when light mode", () => {
    // Act
    render(<Hero mode={"light"} isStart={false} />);

    // Assert
    expect(screen.getByTestId("hi-test-id")).toHaveClass(
      "text-rose-950/90 text-shadow-black/20",
    );
    expect(screen.getByTestId("name-test-id")).toHaveClass(
      "text-rose-950/90 text-shadow-black/20",
    );
    expect(screen.getByTestId("writer-test-id")).toHaveClass(
      "text-white/80 text-shadow-black/60",
    );
  });

  it("render right color when dark mode", () => {
    // Act
    render(<Hero mode={"dark"} isStart={false} />);

    // Assert
    expect(screen.getByTestId("hi-test-id")).toHaveClass(
      "text-white text-shadow-white/40",
    );
    expect(screen.getByTestId("name-test-id")).toHaveClass(
      "text-[#60A5FA] text-shadow-white/40",
    );
    expect(screen.getByTestId("writer-test-id")).toHaveClass(
      "text-[#95C1F8] text-shadow-white/60",
    );
  });

  it("renders TypeAnimation component", () => {
    // Act
    render(<Hero mode="light" isStart={false} />);

    // Arrange
    const animation = screen
      .getByTestId("writer-test-id")
      .querySelector("span");

    // Assert
    expect(animation).toBeInTheDocument();
  });

  it("check when reload page all DOM stays transparent", () => {
    // Act
    render(<Hero mode={"light"} isStart={true} />);

    // Assert
    expect(screen.getByTestId("hi-test-id")).toHaveClass("opacity-0");
    expect(screen.getByTestId("name-test-id")).toHaveClass("opacity-0");
    expect(screen.getByTestId("writer-test-id")).toHaveClass("opacity-0");
  });
});
