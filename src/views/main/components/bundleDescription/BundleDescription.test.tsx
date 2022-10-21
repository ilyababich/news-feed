import { render, screen } from "@testing-library/react";
import BundleDescription from ".";

jest.mock(
  "../../../../components/label/Label.tsx",
  () => (props: { text: JSX.Element }) => <>{props.text}</>
);

const mockBundleDescription = {
  title: "Title",
  description: "Description",
  label: "Label",
};

describe("BundleDescription", () => {
  it("renders bundle description correctly", () => {
    render(<BundleDescription {...mockBundleDescription} />);

    expect(screen.getByText(mockBundleDescription.title)).toBeInTheDocument();
    expect(
      screen.getByText(mockBundleDescription.description)
    ).toBeInTheDocument();
    expect(screen.getByText(mockBundleDescription.label)).toBeInTheDocument();
  });
});
