import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Sky from "./Sky.tsx";

describe("Sky background component", () => {
  it("renders correctly the sun in light mode", () => {
    // Act
    render(<Sky mode="light" isStart={false} />);

    // Assert
    expect(screen.getByTestId("sun-id")).not.toHaveClass("translate-y-[150%]");
    expect(screen.getByTestId("moon-id")).toHaveClass("translate-y-[150%]");
  });

  it("renders correctly the moon in dark mode", () => {
    // Act
    render(<Sky mode="dark" isStart={false} />);

    // Assert
    expect(screen.getByTestId("moon-id")).not.toHaveClass("translate-y-[150%]");
    expect(screen.getByTestId("sun-id")).toHaveClass("translate-y-[150%]");
  });

  it("renders correctly stars & shooting stars when light mode", () => {
    // Act
    render(<Sky mode="light" isStart={false} />);

    // Assert
    expect(screen.getByTestId("night-sky-id")).toHaveClass("opacity-0");
  });

  it("renders correctly stars & shooting stars when dark mode", () => {
    // Act
    render(<Sky mode="dark" isStart={false} />);

    // Assert
    expect(screen.getByTestId("night-sky-id")).toHaveClass("opacity-90");
  });

  it("renders correctly all elements in the DOM", () => {
    // Act
    render(<Sky mode="light" isStart={false} />);

    // Assert
    expect(screen.getByTestId("sun-id")).toBeInTheDocument();
    expect(screen.getByTestId("moon-id")).toBeInTheDocument();
    expect(screen.getByTestId("night-sky-id")).toBeInTheDocument();
  });

  it("hide sun when reload page", () => {
    // Act
    render(<Sky mode="light" isStart={true} />);

    // Assert
    expect(screen.getByTestId("sun-id")).toHaveClass("translate-y-[150%]");
  });
});
