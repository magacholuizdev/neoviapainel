import React, { useEffect, useState } from 'react';
import DroppdownMenu from '../DropdownMenu';

import { Container, Item, Icon, ItemWrapper } from './styles';

export interface TabbedMenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  droppDownItems?: TabbedMenuDroppDownItem[];
}

export interface TabbedMenuDroppDownItem {
  text: string;
  onClick: () => void;
}

interface TabbedMenuProps {
  items: TabbedMenuItem[];
  onChange?: (item: TabbedMenuItem) => void;
  selectedKey: string;
}

const TabbedMenu: React.FC<TabbedMenuProps> = ({
  items,
  onChange,
  selectedKey
}) => {
  function handleClick(item: TabbedMenuItem) {
    onChange && onChange(item);
  }

  function renderDroppDownMenu(item: TabbedMenuItem, content: React.ReactNode) {
    return (
      <DroppdownMenu content={content} positionY="5px">
        {item.droppDownItems?.map((li, i) => (
          <li key={`${item.key}-${i}`} onClick={li.onClick}>
            {li.text}
          </li>
        ))}
      </DroppdownMenu>
    );
  }

  function renderItem(item: TabbedMenuItem, select: string) {
    return (
      <ItemWrapper className={select === item.key ? 'selected' : ''}>
        {item.icon && <Icon>{item.icon}</Icon>}
        {item.label}
      </ItemWrapper>
    );
  }

  return (
    <Container role="menubar">
      {items.map((item, i) => {
        return (
          <Item
            role="menuitem"
            key={item.key + i}
            className={selectedKey === item.key ? 'selected' : ''}
            onClick={() => handleClick(item)}
          >
            {item.droppDownItems
              ? item.droppDownItems.length > 0
                ? renderDroppDownMenu(item, renderItem(item, selectedKey))
                : renderItem(item, selectedKey)
              : renderItem(item, selectedKey)}
          </Item>
        );
      })}
    </Container>
  );
};

export default TabbedMenu;
