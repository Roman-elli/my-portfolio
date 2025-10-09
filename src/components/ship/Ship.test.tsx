import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import Ship from "./Ship";

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal("ResizeObserver", ResizeObserverMock);

describe("Ship component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("Should render no ship when page reload", () => {
    // Act
    render(<Ship mode="light" isStart={true} />);

    // Expect
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[80vh]",
    );
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[80vh] z-10",
    );
  });

  it("Should render airplane when light mode on", () => {
    // Act
    render(<Ship mode="light" isStart={false} />);

    // Expect
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[30vh] z-20",
    );
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[80vh] z-10",
    );
  });

  it("Should render spaceship when dark mode on", () => {
    // Act
    render(<Ship mode="dark" isStart={false} />);

    // Expect
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[10vh] translate-x-[-5vw] scale-0 z-10",
    );
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[25vh] z-20",
    );
  });

  it("Should trigger airplane visibility change after timeout in light mode", async () => {
    // Act
    render(<Ship mode="light" isStart={false} />);

    await act(async () => {
      vi.advanceTimersByTime(2500);
    });

    // Assert
    expect(screen.getByTestId("airplane-test-id")).toHaveClass(
      "translate-y-[30vh] z-20",
    );
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[80vh] z-10",
    );
  });

  it("Should trigger setSpaceShipStart change after timeout in dark mode", async () => {
    // Act
    const { rerender } = render(<Ship mode="dark" isStart={false} />);
    await act(async () => {
      vi.advanceTimersByTime(2500);
    });

    // Assert
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[25vh] z-20",
    );

    // Act
    rerender(<Ship mode="light" isStart={false} />);
    await act(async () => {
      vi.advanceTimersByTime(2500);
    });

    // Assert
    expect(screen.getByTestId("spaceship-test-id")).toHaveClass(
      "translate-y-[15vh] translate-x-[10vw] scale-0 z-10",
    );
  });

  it("Should render Canvas elements for both airplane and spaceship", () => {
    render(<Ship mode="light" isStart={false} />);

    expect(
      screen.getByTestId("airplane-test-id").querySelector("canvas"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("spaceship-test-id").querySelector("canvas"),
    ).toBeInTheDocument();
  });
});
