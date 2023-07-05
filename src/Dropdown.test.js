import { render, screen, waitFor } from '@testing-library/react';
import App from './App.js';

  test('Clicking on the list view sends you to that page (testing dropdown)', async () => {

    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("dropdownButton")).toBeInTheDocument();
    });
    const dropdownBtn = screen.getByTestId("dropdownButton");
    expect(dropdownBtn).toBeInTheDocument();
    dropdownBtn.click();

    await waitFor(() => {
        expect(screen.getByTestId("listDropdownButton")).toBeInTheDocument();
      });
    const listBtn = screen.getByText("List")
    expect(listBtn).toBeInTheDocument
    listBtn.click()
    await waitFor(() => {
      expect(screen.getByText("List view")).toBeInTheDocument();
    });
  });