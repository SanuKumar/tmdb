import { render, screen, cleanup } from "@testing-library/react";
import Users from "../components/Users";

test("Should render User component", () => {
  render(<Users />);
});
