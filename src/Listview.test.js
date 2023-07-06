import { render, screen } from '@testing-library/react';
import Listview from './Listview.js';
import Data from './data.json';
function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('List view renders', () => {
  render(<Listview Data = {Data}/>);
  const hammerprice = screen.getByTestId("Hammer1")
  expect(hammerprice).toBeInTheDocument
});