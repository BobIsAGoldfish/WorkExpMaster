import { render, screen } from '@testing-library/react';
import Listview from './Listview.js';

function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('List view renders', () => {
  render(<Listview />);
  const hammerprice = screen.getByText("Price: £18.50")
  expect(hammerprice).toBeInTheDocument
});