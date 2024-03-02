export interface IMenuItem {
  title: string;
  list: MenuItemDetail[];
}

export interface IMenuItemDetail {
  title: string;
  path: string;
  icon: React.ReactNode;
}
