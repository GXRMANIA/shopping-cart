import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "./Products";

describe("Product component", () => {
    it("renders every item", () => {
      const items = ["1", "2", "3"]
      render(<Products items={items}/>);
      const headingElement = screen.getAllByRole("button", { name: "Add to cart"})
      expect(headingElement.length).toBe(3);
    });

  });