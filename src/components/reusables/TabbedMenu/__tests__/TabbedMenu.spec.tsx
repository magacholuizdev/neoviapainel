import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabbedMenu from '..';

const items = [
  {
    key: 'key1',
    label: 'Label 1'
  },
  {
    key: 'key2',
    label: 'Label 2'
  }
];

describe('TabbedMenu', () => {
  it('should render tabbed menu with 2 items', () => {
    render(<TabbedMenu items={items} selectedKey="" />);

    const allMenuItems = screen.getAllByRole('menuitem');

    expect(allMenuItems).toHaveLength(2);
    expect(screen.queryByText('Label 1')).toBeInTheDocument;
    expect(screen.queryByText('Label 2')).toBeInTheDocument();
  });

  it('should be item 1 selected', () => {
    render(<TabbedMenu items={items} selectedKey="key1" />);

    const allMenuItems = screen.getAllByRole('menuitem');

    expect(allMenuItems).toHaveLength(2);
    expect(allMenuItems[0].className).toContain('selected');
    expect(allMenuItems[1].className).not.toContain('selected');
  });

  it('should to callback when item clicked', () => {
    const onClick = jest.fn();
    render(<TabbedMenu items={items} selectedKey="key1" onChange={onClick} />);

    const allMenuItems = screen.getAllByRole('menuitem');

    fireEvent.click(allMenuItems[0]);

    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(items[0]);
  });

  it('should render icons', () => {
    const items = [
      {
        key: 'key1',
        label: 'Label 1',
        icon: <span data-testid="icon1">i</span>
      },
      {
        key: 'key2',
        label: 'Label 2',
        icon: <span data-testid="icon2">i</span>
      }
    ];

    render(<TabbedMenu items={items} selectedKey="key1" />);

    const icon1 = screen.getByTestId('icon1');
    const icon2 = screen.getByTestId('icon2');

    expect(icon1).toBeInTheDocument();
    expect(icon2).toBeInTheDocument();
  });

  it('should render dropdown menu', () => {
    const items = [
      {
        key: 'key1',
        label: 'Label 1',
        icon: <span data-testid="icon1">i</span>
      },
      {
        key: 'key2',
        label: 'Label 2',
        icon: <span data-testid="icon2">i</span>,
        droppDownItems: [
          {
            text: 'Dropdown Item 1',
            onClick: jest.fn()
          },
          {
            text: 'Dropdown Item 2',
            onClick: jest.fn
          }
        ]
      }
    ];

    render(<TabbedMenu items={items} selectedKey="key1" />);

    const dropdownItem1 = screen.queryByText('Dropdown Item 1');
    const dropdownItem2 = screen.queryByText('Dropdown Item 2');

    expect(dropdownItem1).toBeInTheDocument();
    expect(dropdownItem2).toBeInTheDocument();
    expect(dropdownItem1).not.toBeVisible();
    expect(dropdownItem2).not.toBeVisible();
  });
});
