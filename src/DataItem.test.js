import { render, screen } from '@testing-library/react';
import DataItem from './DataItem';

function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('renders header text', () => {

  var data = { "Name": "Hammer",      "pic": "hammer_medium.jpg",      "Size": "Medium", "Department": "Tools", "Price": "£12.50"};

  render(<DataItem product={data}/> );
  checkElement("Name: Hammer", "P");
  checkElement("Size: Medium", "P");
  checkElement("Department: Tools", "P");
  checkElement("Price: £12.50", "P"); 

});