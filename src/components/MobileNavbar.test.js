import { render, screen } from "@testing-library/react";
import MobileNavbar from "./MobileNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/";

describe("MobileNavbar Test", () => {
  it("renders MobileNavbar and show texts of links when NOT logged in", () => {
    render(
      <Router>
        <MobileNavbar />
      </Router>
    );
    expect(screen.getByText(/moovolio/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it("renders MobileNavbar and shows texts of links when logged in", () => {
    const user = { email: "test@example.com" };
    render(
      <Router>
        <MobileNavbar user={user} />
      </Router>
    );
    expect(screen.getByText(/moovolio/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/account/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });
});
