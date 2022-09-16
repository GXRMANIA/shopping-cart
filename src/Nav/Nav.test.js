import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { BrowserRouter} from "react-router-dom";


const MockNav = () => {
  return (
    <BrowserRouter>
      <Nav/>
    </BrowserRouter>
  )
}

describe("Nav component", () => {
    it("renders nav bar heading", () => {
      render(<MockNav/>);
      const headingElement = screen.getByRole("heading", { name: "FakeStore"})
      expect(headingElement).toBeInTheDocument();
    });
    it("renders nav bar links", () => {
        render(<MockNav/>);
        const headingElement = screen.getAllByRole("listitem");
        expect(headingElement.length).toBe(4);
      });
  });