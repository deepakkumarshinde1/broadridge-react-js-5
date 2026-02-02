import { render, screen } from "@testing-library/react";
import Blog from "../components/Blog";
import axios from "axios";
import { expect, test, vi } from "vitest";

vi.mock("axios");
test("Api call on page load", async () => {
  axios.get.mockResolvedValueOnce({
    data: [
      {
        id: 1,
        name: "Deepakkumar",
      },
      {
        id: 2,
        name: "Deepakkumar",
      },
      {
        id: 3,
        name: "Deepakkumar",
      },
    ],
  });
  render(<Blog />);
  const element = await screen.findByTestId("user-list");
  expect(element.childNodes.length).toBe(3);
});
