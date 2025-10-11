import { render, screen, act } from "@testing-library/react";
import Ship from "./Ship";
import { describe, it, afterEach, vi, expect } from "vitest";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = global.ResizeObserver || ResizeObserver;

vi.useFakeTimers();

describe("Ship component", () => {
  afterEach(() => {
    vi.clearAllTimers();
  });

  it("Should render no ship immediately when page reload", () => {
    // Act
    render(<Ship mode="light" isStart={true} />);

    // Assert
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[80vh]",
    );
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[60vh] translate-x-[90vw] transition-none z-10",
    );
  });

  it("Should render airplane when light mode on after timeout", () => {
    // Act
    render(<Ship mode="light" isStart={false} />);

    act(() => {
      vi.advanceTimersByTime(2500);
    });

    // Assert
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[30vh] z-20",
    );
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[60vh] translate-x-[90vw] transition-none z-10",
    );
  });

  it("Should render spaceship when dark mode on after timeout", () => {
    // Act
    render(<Ship mode="dark" isStart={false} />);

    act(() => {
      vi.advanceTimersByTime(2500);
    });

    // Assert
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[25vh] z-20",
    );
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[-30vh] translate-x-[-90vw] rotate-[60deg] transition-none z-10",
    );
  });

  it("Should trigger airplane visibility change after timeout in light mode", () => {
    // Act
    render(<Ship mode="light" isStart={false} />);

    act(() => {
      vi.advanceTimersByTime(2500);
    });

    // Assert
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[30vh] z-20",
    );
  });

  it("Should trigger setSpaceShipStart change after timeout in dark mode", () => {
    // Act
    render(<Ship mode="dark" isStart={false} />);

    act(() => {
      vi.advanceTimersByTime(2500);
    });

    act(() => {
      vi.advanceTimersByTime(7000);
    });

    // Assert
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[-30vh] translate-x-[-90vw] rotate-[60deg] transition-none z-10",
    );
  });

  it("Should trigger setSpaceShipStart(true) after 5000ms in light mode", () => {
    // Act
    render(<Ship mode="light" isStart={false} />);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    // Assert
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[60vh] translate-x-[90vw] transition-none z-10",
    );
  });

  it("Should render airplane in intermediate offscreen state after mode toggle from dark to light", () => {
    // Act
    const { rerender } = render(<Ship mode="dark" isStart={false} />);

    act(() => {
      rerender(<Ship mode="light" isStart={false} />);
    });

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    // Assert
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[30vh] z-20",
    );
  });

  it("Should transition spaceship to offscreen state after mode toggle", () => {
    // Act
    const { rerender } = render(<Ship mode="light" isStart={true} />);

    act(() => {
      rerender(<Ship mode="dark" isStart={false} />);
      vi.advanceTimersByTime(2500);
    });

    act(() => {
      rerender(<Ship mode="light" isStart={false} />);

      vi.advanceTimersByTime(5000);
    });

    // Assert
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[-20vh] translate-x-[30vw] rotate-[45deg] scale-0 z-10",
    );
  });
});
