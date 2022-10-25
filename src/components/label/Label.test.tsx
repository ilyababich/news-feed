import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label", () => {
  it("shows skeleton if isLoading", () => {
    render(<Label isLoading text={<p>Text</p>} />);

    expect(screen.getByTestId("label-skeleton")).toBeInTheDocument();
  });

  it("shows text if not loading", () => {
    render(<Label text={<p>Text</p>} />);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });
});
