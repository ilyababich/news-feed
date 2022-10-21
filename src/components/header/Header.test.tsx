import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("render Header component correctly", () => {
    render(<Header />);

    expect(screen.getByText("NEWS FEED")).toBeInTheDocument();
  });
});
