import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from '..';

describe('DropdownMenu', () => {
  it('should render button', () => {
    render(
      <DropdownMenu text="Text of button">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </DropdownMenu>
    );

    const button = screen.getByRole('button');
    const item1 = screen.queryByText('Item 1');
    const item2 = screen.queryByText('Item 2');
    const item3 = screen.queryByText('Item 3');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Text of button');
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
    expect(item1).not.toBeVisible();
    expect(item2).not.toBeVisible();
    expect(item3).not.toBeVisible();
  });

  it('should show items when click button', () => {
    render(
      <DropdownMenu text="Text of button">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </DropdownMenu>
    );

    const button = screen.getByRole('button');
    const item1 = screen.queryByText('Item 1');
    const item2 = screen.queryByText('Item 2');
    const item3 = screen.queryByText('Item 3');

    expect(item1).not.toBeVisible();
    expect(item2).not.toBeVisible();
    expect(item3).not.toBeVisible();

    fireEvent.click(button);

    expect(item1).toBeVisible();
    expect(item2).toBeVisible();
    expect(item3).toBeVisible();
  });

  it('should hidde items when click button out', () => {
    render(
      <DropdownMenu text="Text of button">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </DropdownMenu>
    );

    const button = screen.getByRole('button');
    const item1 = screen.queryByText('Item 1');
    const item2 = screen.queryByText('Item 2');
    const item3 = screen.queryByText('Item 3');

    expect(item1).not.toBeVisible();
    expect(item2).not.toBeVisible();
    expect(item3).not.toBeVisible();

    fireEvent.click(button);

    expect(item1).toBeVisible();
    expect(item2).toBeVisible();
    expect(item3).toBeVisible();

    fireEvent.blur(button);

    expect(item1).not.toBeVisible();
    expect(item2).not.toBeVisible();
    expect(item3).not.toBeVisible();
  });
});
