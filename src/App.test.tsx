import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Item from './Components/Item/Item';
import ItemComponent from './Components/Item/Item';
import FoundItems from './Components/FoundItems/FoundItems';
import HomePageSearch from './Components/HomePageSearch/HomePageSearch';
import DetailedItem from './Components/DetailedItem/DetailedItem';

// TEST 1
test('renders HomePageSearch Component text', () => {
  render(<HomePageSearch/>);
  const linkElement = screen.getByText(/health options/i);
  expect(linkElement).toBeInTheDocument();
});
// TEST 2
test('renders FoundItems', () => {
  render(<FoundItems />);
  const linkElement = screen.getByRole("div", {name: "FoundItemsWrapper"});
  expect(linkElement).toBeInTheDocument();
});
