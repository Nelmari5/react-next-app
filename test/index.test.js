import About from "../pages/info/About";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// eslint-disable-next-line no-undef
describe("Articles", () => {
    // eslint-disable-next-line no-undef
    it("renders the Articles", () => {
      // eslint-disable-next-line react/react-in-jsx-scope
      render(<About />);
      // check if all components are rendered
      // eslint-disable-next-line no-undef
      expect(screen.getByTestId("result")).toBeInTheDocument();
    });
  });