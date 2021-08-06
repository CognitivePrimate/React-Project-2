import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Item from './Components/Item/Item';
import ItemComponent from './Components/Item/Item';
import FoundItems from './Components/FoundItems/FoundItems';
import HomePageSearch from './Components/HomePageSearch/HomePageSearch';
import DetailedItem from './Components/DetailedItem/DetailedItem';
import Favorites from './Components/Favorites/Favorites';

// TEST 1
test('renders HomePageSearch Component text', () => {
  render(<HomePageSearch/>);
  const linkElement = screen.getByText(/health options/i);
  expect(linkElement).toBeInTheDocument();
});
// TEST 2
test('renders image in Detailed Items', () => {
  render(<DetailedItem />);
  const img = screen.getByRole("img", {name: "DetailedItemfavoriteIcon"})
  expect(img).toBeInTheDocument();
});
// TEST 3
it("checkpresence of Item in FoundItems component", () => {
   render(<Favorites/>);
   const test = screen.getByText(/Favorites/)
  expect(test).toBeInTheDocument();
});



