import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

export function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

test("check ul for navigation", () => {
  renderWithRouter(<App />);
  let element = screen.getByTestId("main-menu"); // query method
  // Assertions
  expect(element).toBeInTheDocument();
  expect(element.nodeName.toLowerCase()).toBe("ul");
});

test("check menu items count", () => {
  renderWithRouter(<App />);
  //let element = screen.getByTestId("main-menu");
  const elements = screen.getAllByTestId("menu-item");
  expect(elements.length).toBe(4);
});
