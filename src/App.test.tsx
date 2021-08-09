import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Item from './Components/Item/Item';
import ItemComponent from './Components/Item/Item';
import FoundItems from './Components/FoundItems/FoundItems';
import HomePageSearch from './Components/HomePageSearch/HomePageSearch';
import DetailedItem from './Components/DetailedItem/DetailedItem';
import Favorites from './Components/Favorites/Favorites';
import Header from './Components/Header/Header';

// TEST 1
test('renders HomePageSearch Component text', () => {
  render(<HomePageSearch/>);
  const linkElement = screen.getByText(/health options/i);
  expect(linkElement).toBeInTheDocument();
});
// TEST 2
test('checks for search params', () => {
  render(<HomePageSearch />);
  const headerText = screen.getByText(/vegetarian/i);
  expect(headerText).toBeInTheDocument();
});
// TEST 3
it("check presence of Item in Favorites component", () => {
   render(<Favorites/>);
   const test = screen.getByText(/Favorites/)
  expect(test).toBeInTheDocument();
});
// TEST 4
it("check for submit button", () => {
  render(<HomePageSearch/>);
  const btn = screen.getByRole("button");
 expect(btn).toBeInTheDocument();
});
// TEST 5
it("nothing in FoundItems pre-search function", () => {
  render(<FoundItems/>);
  const wrapper = screen.queryByRole("div");
  expect(wrapper).not.toBeInTheDocument();
})
// TEST 6
test('calorie limit search title exists', () => {
  render(<HomePageSearch/>);
  const linkElement = screen.getByText(/Calorie Limit/i);
  expect(linkElement).toBeInTheDocument();
});




