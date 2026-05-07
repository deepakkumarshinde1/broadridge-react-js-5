import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import App from "../App";

function setRender(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}
describe("Menu Bar Test", () => {
  test("Check ul is present", () => {
    setRender(<App />);
    let element = screen.getByTestId("main-menu");
    expect(element).toBeInTheDocument();
  });

  test("check menu items count", () => {
    setRender(<App />);
    let elements = screen.getAllByTestId("menu-item");
    expect(elements.length).toBe(4);
  });
});
