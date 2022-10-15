import {  render, screen } from "@testing-library/react";
import ProfileHeader from "./ProfileHeader";

it("Should render an image on the profile header", async () => {
    render(<ProfileHeader />)

    const profileImage = screen.getByRole("img");

    expect(profileImage).toBeInTheDocument();
})