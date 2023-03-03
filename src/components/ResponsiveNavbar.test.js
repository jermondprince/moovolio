import { render, screen } from "@testing-library/react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/";

describe("ResponsiveNavbar Test", () => {
  it("renders Navbar when screen is greater than 640", () => {
    // Mock the window.innerWidth property to be greater than 640
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 800,
    });
    // Render the ResponsiveNavbar component
    render(
      <Router>
        <ResponsiveNavbar />
      </Router>
    );
    // Expect the Navbar component to be in the document
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders MobileNavbar when screen is less than 640", () => {
    // Mock the window.innerWidth property to be greater than 640
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 500,
    });
    // Render the ResponsiveNavbar component
    render(
      <Router>
        <ResponsiveNavbar />
      </Router>
    );
    // Expect the Navbar component to be in the document
    expect(screen.getByTestId("mobile-navbar")).toBeInTheDocument();
  });
});
