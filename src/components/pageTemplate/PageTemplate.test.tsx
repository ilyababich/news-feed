import { render, screen } from "@testing-library/react";
import PageTemplate from "./PageTemplate";

jest.mock("../header", () => () => <p>Header</p>);

describe("PageTemplate", () => {
  it("renders component correctly", () => {
    render(
      <PageTemplate>
        <p>Body</p>
      </PageTemplate>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });
});
