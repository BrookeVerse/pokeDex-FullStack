import { render, screen } from "@testing-library/react";
import Card from "./Card";

it("Should render a card", async () => {
  render(<Card />);

  const cards = screen.queryAllByRole("card");

  cards.forEach((card) => {
    expect(card).toBeInTheDocument();
  });
});

it("Should render a card with an image", async () => {
  render(<Card />);

  const images = screen.queryAllByRole("img");

  images.forEach((image) => {
    expect(image).toBeInTheDocument();
  });
});

it("Should render a card with a title", async () => {
  render(<Card />);

  const titles = screen.queryAllByRole("titles");

  titles.forEach((title) => {
    expect(title).toBeInTheDocument();
  });
});

it("Should render a card with a description", async () => {
  render(<Card />);

  const descriptions = screen.queryAllByRole("descriptions");

  descriptions.forEach((description) => {
    expect(description).toBeInTheDocument();
  });
});