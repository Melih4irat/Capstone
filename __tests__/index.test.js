import {render, screen} from "@testing-library/react";
import {ProjectCard} from "../components/Dashboard/ProjectCard";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders text Login", () => {
    render(<ProjectCard />);

    const headline = screen.getByText(/Projects/i);

    expect(headline).toBeInTheDocument();
  });
});
