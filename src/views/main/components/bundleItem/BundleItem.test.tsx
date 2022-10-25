import { render, screen } from "@testing-library/react";
import BundleItem from "./BundleItem";

describe("BundleItem", () => {
  it("renders bundle items correctly", () => {
    render(
      <BundleItem
        title="Title"
        label="Label"
        imageUrl="https://www.test.com/img"
        link="https://www.test.com/link"
      />
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.test.com/link"
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://www.test.com/img"
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
});
