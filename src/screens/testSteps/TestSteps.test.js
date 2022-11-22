import { render, screen, cleanup } from "@testing-library/react";
import TestSteps from "./TestSteps";

describe(TestSteps, () => {
  afterEach(() => {
    cleanup();
  });

  it("should render questions component", () => {
    render(<TestSteps />);
    const testStepsComponent = screen.getByTestId("test-steps");
    expect(testStepsComponent).toBeInTheDocument();
  });
  it("should show correct button label", () => {
    render(<TestSteps />);
    const button = screen.getByTestId("button");
    expect(button).toHaveTextContent("Next");
  });
});
