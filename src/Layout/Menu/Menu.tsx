import { NavBar } from '@axa-fr/react-toolkit-all';
import { createMenu, TMenuItemBase } from './MenuItem';
import './Menu.scss';

export type TMenu = {
  menuItems?: TMenuItemBase[];
  createMenuFn?: typeof createMenu;
  isVisible?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  positionInit?: number;
};

export const Menu = ({ menuItems, createMenuFn = createMenu, onClick, ...navBarProps }: TMenu) => (
  <NavBar {...navBarProps} onClick={onClick}>
    {menuItems && createMenuFn(menuItems, onClick)}
  </NavBar>
);
