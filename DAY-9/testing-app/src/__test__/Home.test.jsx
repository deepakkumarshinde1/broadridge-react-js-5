import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "../components/Home";

describe("Home Comp Counter App", () => {
  test("Check for counter app", async () => {
    render(<Home />);
    let counterElement = screen.getByTestId("counter");
    let counterButton = screen.getByTestId("counter-button");
    expect(counterElement.innerHTML).toBe("0");
    expect(counterButton).toBeInTheDocument();

    // when we click on button counter element bu be updated by one
    fireEvent.click(counterButton); //1
    fireEvent.click(counterButton); //2
    fireEvent.click(counterButton); //3
    fireEvent.click(counterButton); //4
    await waitFor(() => {
      expect(counterElement.innerHTML).toBe("4");
    });
  });

  test("check for props working", () => {
    render(<Home text="Hi" />);
    let element = screen.getByTestId("props-text");
    expect(element).toContainHTML("Hi");
  });
});
