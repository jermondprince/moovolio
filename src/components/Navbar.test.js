import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/";

describe("Navbar Test", () => {
  it("renders Navbar and show texts of links when NOT logged in", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText(/moovolio/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it("renders Navbar and shows texts of links when logged in", () => {
    const user = { email: "test@example.com" };
    render(
      <Router>
        <Navbar user={user} />
      </Router>
    );
    expect(screen.getByText(/moovolio/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/account/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });
});
