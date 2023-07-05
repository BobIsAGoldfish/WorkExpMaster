import {act, render, screen } from '@testing-library/react';
import App from './App.js';

test('renders header text',() => {
  render(<App/>);
  const linkElement = screen.getByText("Junior");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.tagName).toBe("H1");
});

test('Local storage remembers the category and item the user was previously using',() =>{
  act(() => {
  localStorage.clear();
  localStorage.setItem("Category", "Gallery");
  localStorage.setItem("ItemNo", 0);
  });
  render(<App/>)
  expect(screen.getByText("Gallery view")).toBeInTheDocument();
  act(() => {
    localStorage.setItem("Category", "List");
    localStorage.setItem("ItemNo", "0");
    });
    render(<App/>)
  expect(screen.getByText("List view")).toBeInTheDocument();
});