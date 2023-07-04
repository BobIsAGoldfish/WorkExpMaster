import { render, screen, waitFor } from '@testing-library/react';
import App from './App.';

  test('Clicking on the list view sends you to that page', async () => {

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Individual")).toBeInTheDocument();
    });
    const dropdownBtn = screen.getByText("Individual");
    expect(dropdownBtn).toBeInTheDocument();
    dropdownBtn.click();

    await waitFor(() => {
        expect(screen.getByText("List")).toBeInTheDocument();
      });
    const listBtn = screen.getByTestId("List")
    expect(listBtn).toBeInTheDocument
    listBtn.click()
    expect(screen.getByText("List View")).toBeInTheDocument();
  });