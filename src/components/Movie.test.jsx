import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Movie from "./Movie";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/";

describe("Movie Test", () => {
  it("should render movie description", () => {
    const movie = {
      title: "The Movie",
      overview: "This is the description of the movie",
    };
    const handleActive = jest.fn();
    render(
      <Router>
        <Movie movie={movie} handleActive={handleActive} />
      </Router>
    );
    const titleElement = screen.getByText(movie.title);

    fireEvent.click(titleElement);

    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toHaveTextContent(movie.overview);
    expect(handleActive).toHaveBeenCalled();
    expect(handleActive).toBeCalledTimes(1);
  });
});
