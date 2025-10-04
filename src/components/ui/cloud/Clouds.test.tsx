import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Clouds from "./Clouds.tsx";
import type { Cloud as CloudType } from "./../../sky/Sky.tsx";

describe("Cloud Component", () => {
  const cloud: CloudType = {
    src: "cloud.png",
    animate: "animate-cloudA",
    pt: "pt-[10vh]",
    pl: "pl-[20%]",
    initialTranslate: "translate-x-[-200%]",
    opacity: "opacity-100",
  };

  it("renders cloud visible correctly", () => {
    // Act
    render(<Clouds cloud={cloud} visible={true} />);

    // Arrange
    const img = screen.getByTestId("cloud-id");

    // Assert
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass(cloud.opacity);
    expect(img).not.toHaveClass(cloud.initialTranslate);
  });

  it("renders cloud hidden correctly", () => {
    // Act
    render(<Clouds cloud={cloud} visible={false} />);

    // Assert
    expect(screen.getByTestId("cloud-id")).toHaveClass(
      `${cloud.initialTranslate} opacity-0`,
    );
  });

  it("applies back prop correctly", () => {
    // Act
    render(<Clouds cloud={cloud} visible={true} back />);

    // Arrange
    const img = screen.getByTestId("cloud-id");

    // Assert
    expect(img).toHaveAttribute("alt", "Clouds back");
    expect(img).toHaveClass(
      "w-[clamp(40px,6vw,140px)] drop-shadow-md duration-2000",
    );
    expect(img).not.toHaveClass(
      "w-[clamp(105px,12vw,200px)] drop-shadow-lg duration-3000",
    );
  });

  it("applies front prop correctly", () => {
    // Act
    render(<Clouds cloud={cloud} visible={true} />);

    // Arrange
    const img = screen.getByTestId("cloud-id");

    // Assert
    expect(img).toHaveAttribute("alt", "Clouds");
    expect(img).toHaveClass(
      "w-[clamp(105px,12vw,200px)] drop-shadow-lg duration-3000",
    );
    expect(img).not.toHaveClass(
      "w-[clamp(40px,6vw,140px)] drop-shadow-md duration-2000",
    );
  });
});
