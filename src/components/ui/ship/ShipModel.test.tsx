import { render, screen } from "@testing-library/react";
import { describe, it, vi, beforeEach } from "vitest";
import { Group } from "three";
import ShipModel from "./ShipModel";

const playMock = vi.fn();

vi.mock("@react-three/drei", () => {
  type GLTFResult = {
    scene: Group;
    animations: unknown[];
  };

  const useGLTF: (() => GLTFResult) & { preload: (model: string) => void } =
    Object.assign(
      () => ({
        scene: new Group(),
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

describe("ShipModel", () => {
  it("renders the group with the primitive object", () => {
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
    expect(screen.getByTestId("shipModel-group-test-id")).toBeInTheDocument();
  });

  it("applies lowSize for small screens", () => {
    // Arrange
    mockUseThree.mockReturnValue({ size: { width: 500, height: 600 } });

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
    expect(screen.getByTestId("shipModel-group-test-id")).toHaveAttribute(
      "scale",
      "0.5,0.5,0.5",
    );
  });

  it("applies mediumSize for medium screens", () => {
    // Arrange
    mockUseThree.mockReturnValue({ size: { width: 800, height: 600 } });

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
    expect(screen.getByTestId("shipModel-group-test-id")).toHaveAttribute(
      "scale",
      "1,1,1",
    );
  });

  it("applies highSize for large screens", () => {
    // Arrange
    mockUseThree.mockReturnValue({ size: { width: 1200, height: 800 } });

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
    expect(screen.getByTestId("shipModel-group-test-id")).toHaveAttribute(
      "scale",
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
