import { render, screen, cleanup } from "@testing-library/react";
import Questions from "./Questions";

describe(Questions, () => {
  afterEach(() => {
    cleanup();
  });

  it("should render questions component", () => {
    render(<Questions />);
    const questionElement = screen.getByTestId("question-component");
    expect(questionElement).toBeInTheDocument();
  });
  it("should render correct question number", () => {
    const firstPage = 1;
    render(<Questions page={firstPage} />);
    const questionNumber = screen.getByTestId("question-number");
    if (firstPage) {
      expect(questionNumber).toHaveTextContent(1);
    }
  });
});
