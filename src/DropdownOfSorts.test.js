import {act, render, screen } from '@testing-library/react';
import App from './App.js';


test('The filters filter',() =>{
  act(() => {
  localStorage.clear();
  localStorage.setItem("FilterType", "hammer")
});
  render(<App/>)
  expect(screen.getByText("Hammer")).toBeInTheDocument();
  act(() => {
    localStorage.setItem("FilterType", "batteries");
    });
    render(<App/>)
  expect(screen.getByText("Name: Batteries")).toBeInTheDocument();
});