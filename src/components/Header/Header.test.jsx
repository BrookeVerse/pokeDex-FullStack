import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("Should render a header", async () => {
    render(<Header />)

    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument();
});