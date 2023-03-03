import { render, screen } from "@testing-library/react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/";
import Navbar from "./Navbar";

describe("ResponsiveNavbar Test", () => {
  it("renders ResponsiveNavbar and show texts of links when NOT logged in", () => {
    render(
      <Router>
        <ResponsiveNavbar />
      </Router>
    );
    expect(screen.getByText(/moovolio/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it("renders ResponsiveNavbar and shows texts of links when logged in", () => {
    const user = { email: "test@example.com" };
    render(
      <Router>
        <ResponsiveNavbar user={user} />
      </Router>
    );
    expect(screen.getByText(/moovolio/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/account/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it("renders Navbar when screen is greater than 640", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 800,
    });

    const user = { email: "test@example.com" };

    render(
      <Router>
        <ResponsiveNavbar user={user} />
      </Router>
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders MobileNavbar when screen is less than 640", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 500,
    });

    const user = { email: "test@example.com" };

    render(
      <Router>
        <ResponsiveNavbar user={user} />
      </Router>
    );
    expect(screen.getByTestId("mobile-navbar")).toBeInTheDocument();
  });
});
