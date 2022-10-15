import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

it("Should render the SearchBar", async () => {
   const {container} =  render(<SearchBar />)

    expect(container).toBeInTheDocument();
})

it("Should update input box with each key press", () => {
    render(<SearchBar />);
  
    const input = screen.getByPlaceholderText("Gotta Catch Them All...");
    userEvent.type(input, "JigglyPuff");
  
    const updatedInput = screen.findByText("JigglyPuff");
    expect(updatedInput).toBeTruthy();
  });