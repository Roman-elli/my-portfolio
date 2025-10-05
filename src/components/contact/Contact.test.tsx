import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact.tsx";

describe("Contact bar component", () => {
  it("renders all icons/underbar correctly", () => {
    // Act
    render(<Contact mode={"light"} isAnimating={false} isStart={false} />);

    // Assert
    expect(screen.getByTestId("git-icon-id")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-icon-id")).toBeInTheDocument();
    expect(screen.getByTestId("underbar-id")).toBeInTheDocument();
    expect(screen.getByTestId("contact-bar-id")).not.toHaveClass(
      "translate-y-[50%] opacity-0",
    );
  });

  it("renders icons/underbar with correctly design when light mode on", () => {
    // Act
    render(<Contact mode={"light"} isAnimating={false} isStart={false} />);

    // Assert
    expect(screen.getByTestId("git-icon-id")).toHaveClass(
      "text-[#571111] drop-shadow-white/70 hover:text-white hover:drop-shadow-white duration-400",
    );
    expect(screen.getByTestId("linkedin-icon-id")).toHaveClass(
      "text-[#571111] drop-shadow-white/70 hover:text-white hover:drop-shadow-white duration-400",
    );
    expect(screen.getByTestId("underbar-id")).toHaveClass(
      "bg-[#571111]/60 shadow-[0_0_10px_#ffffff]",
    );
  });

  it("renders icons/underbar with correctly design when dark mode on", () => {
    // Act
    render(<Contact mode={"dark"} isAnimating={false} isStart={false} />);

    // Assert
    expect(screen.getByTestId("git-icon-id")).toHaveClass(
      "text-[#95C1F8] drop-shadow-yellow-400/70 hover:text-white hover:drop-shadow-yellow-400 duration-400",
    );
    expect(screen.getByTestId("linkedin-icon-id")).toHaveClass(
      "text-[#95C1F8] drop-shadow-yellow-400/70 hover:text-white hover:drop-shadow-yellow-400 duration-400",
    );
    expect(screen.getByTestId("underbar-id")).toHaveClass(
      "bg-[#60A5FA] shadow-[0_0_10px_#FACC15]",
    );
  });

  it("hide the component when page is reloaded", () => {
    // Act
    render(<Contact mode={"light"} isAnimating={true} isStart={true} />);

    // Assert
    expect(screen.getByTestId("contact-bar-id")).toHaveClass(
      "translate-y-[50%] opacity-0",
    );
  });

  it("renders icons correctly when var isAnimating is true", () => {
    // Act
    render(<Contact mode={"light"} isAnimating={true} isStart={false} />);

    // Assert
    expect(screen.getByTestId("git-icon-id")).toHaveClass("duration-2500");
    expect(screen.getByTestId("linkedin-icon-id")).toHaveClass("duration-2500");
  });
});
