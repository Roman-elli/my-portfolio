import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  it("render all background texts and writer", () => {
    // Act
    render(<Hero mode={"light"} />);

    // Assert
    expect(screen.getByTestId("hi-test-id")).toBeInTheDocument();
    expect(screen.getByTestId("name-test-id")).toBeInTheDocument();
    expect(screen.getByTestId("writer-test-id")).toBeInTheDocument();
  });

  it("render right color when light mode", () => {
    // Act
    render(<Hero mode={"light"} />);

    // Assert
    expect(screen.getByTestId("hi-test-id")).toHaveClass(
      "text-black text-shadow-black/20",
    );
    expect(screen.getByTestId("name-test-id")).toHaveClass(
      "text-[#571111] text-shadow-black/20",
    );
    expect(screen.getByTestId("writer-test-id")).toHaveClass(
      "text-[#A87777] text-shadow-black/60",
    );
  });

  it("render right color when dark mode", () => {
    // Act
    render(<Hero mode={"dark"} />);

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
    render(<Hero mode="light" />);

    // Arrange
    const animation = screen
      .getByTestId("writer-test-id")
      .querySelector("span");

    // Assert
    expect(animation).toBeInTheDocument();
  });
});
