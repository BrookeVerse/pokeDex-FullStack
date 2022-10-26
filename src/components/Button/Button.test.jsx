import { render, screen } from "@testing-library/react";

it("Should display the text in the button", () => {
    render(<Button buttonText="Cancel" />);
    const text = screen.getByText("Cancel");
    expect(text).toBeInTheDocument();
  });