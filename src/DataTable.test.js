import { render, screen, waitFor } from '@testing-library/react';
import DataTable from './DataTable';
import App from './App.js'

function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('renders item zero from data', () => {

  render(<App/>);
  checkElement("Name: Hammer", "P");
  checkElement("Size: Medium", "P");
  checkElement("Department: Tools", "P");
  checkElement("Price: £12.50", "P");  
  checkElement("Next", "BUTTON");

});

 test('clicking the next button shows item 1, then clicking the previous button returns to item 1', async () => {

    render(<App/>);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeInTheDocument();
    nextButton.click();

    await waitFor(() => {
        expect(screen.getByText("Price: £10.50")).toBeInTheDocument();
      });

    const prevButton = screen.getByText("Previous");
    expect(prevButton).toBeInTheDocument();
    prevButton.click();

    await waitFor(() => {
        expect(screen.getByText("Price: £12.50")).toBeInTheDocument();
      });
  });

  test('clicking the first button shows the first item', async () => {

    render(<App/>);

    const button = screen.getByText("First");
    expect(button).toBeInTheDocument();
    button.click();

    await waitFor(() => {
        expect(screen.getByText("Price: £12.50")).toBeInTheDocument();
      });
  });

  test('clicking the last button shows the last item', async () => {
    render(<App/>);
    const lastbutton = screen.getByText("Last");
    expect(lastbutton).toBeInTheDocument();
    lastbutton.click();

    await waitFor(() => {
        expect(screen.getByText("Price: £23.45")).toBeInTheDocument();
      });
  });