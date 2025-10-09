import { render } from "@testing-library/react";
import { describe, it, vi, beforeEach } from "vitest";
import ShipModel from "./ShipModel";

const playMock = vi.fn();

vi.mock("@react-three/drei", () => {
  type MockGLTF = {
    scene: { type: string };
    animations: unknown[];
    preload?: (model: string) => void;
  };

  const useGLTF: (() => MockGLTF) & { preload: (model: string) => void } =
    Object.assign(
      () => ({
        scene: { type: "Group" },
        animations: [{}],
      }),
      { preload: vi.fn() },
    );

  const useAnimations = () => ({
    actions: { mockAction: { play: playMock } },
  });

  return { useGLTF, useAnimations };
});

const mockUseThree = vi.fn(() => ({ size: { width: 800, height: 600 } }));

vi.mock("@react-three/fiber", () => ({
  useThree: () => mockUseThree(),
}));

beforeEach(() => {
  playMock.mockClear();
  mockUseThree.mockReturnValue({ size: { width: 800, height: 600 } });
});

describe("ShipModel component", () => {
  it("renders a group with a primitive inside", () => {
    // Act
    const { container } = render(
      <ShipModel
        model="/spaceship.glb"
        lowSize={0.5}
        mediumSize={1}
        highSize={2}
      />,
    );

    // Assert
    expect(container.querySelector("group")).toBeTruthy();
    expect(container.querySelector("primitive")).toBeTruthy();
  });

  it("applies lowSize for small screens", () => {
    // Arrange
    mockUseThree.mockReturnValue({ size: { width: 500, height: 600 } });

    // Act
    const { container } = render(
      <ShipModel
        model="/spaceship.glb"
        lowSize={0.5}
        mediumSize={1}
        highSize={2}
      />,
    );

    // Assert
    expect(container.querySelector("group")?.getAttribute("scale")).toBe(
      "0.5,0.5,0.5",
    );
  });

  it("applies mediumSize for medium screens", () => {
    // Arrange
    mockUseThree.mockReturnValue({ size: { width: 800, height: 600 } });

    // Act
    const { container } = render(
      <ShipModel
        model="/spaceship.glb"
        lowSize={0.5}
        mediumSize={1}
        highSize={2}
      />,
    );

    // Assert
    expect(container.querySelector("group")?.getAttribute("scale")).toBe(
      "1,1,1",
    );
  });

  it("applies highSize for large screens", () => {
    // Arrange
    mockUseThree.mockReturnValue({ size: { width: 1200, height: 800 } });

    // Act
    const { container } = render(
      <ShipModel
        model="/spaceship.glb"
        lowSize={0.5}
        mediumSize={1}
        highSize={2}
      />,
    );

    // Assert
    expect(container.querySelector("group")?.getAttribute("scale")).toBe(
      "2,2,2",
    );
  });

  it("calls play on the first action", () => {
    // Act
    render(
      <ShipModel
        model="/spaceship.glb"
        lowSize={0.5}
        mediumSize={1}
        highSize={2}
      />,
    );

    // Assert
    expect(playMock).toHaveBeenCalled();
  });
});
