import {render, screen} from "@testing-library/react";
import Button from "../components/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders the button", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
