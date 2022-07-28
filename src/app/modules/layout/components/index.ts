import { LayoutComponent } from './layout';
import { BottomNavComponent } from './bottom-nav';
import { BrandComponent } from './brand';
import { ItemComponent } from './item';
import { MenuitemComponent } from './menu-item';
import { MenuItemComponent } from './menu-item';
import { MenuItemsDropdownComponent } from './menu-items-dropdown';
import { SearchBarComponent } from './search-bar';
import { SelectUserComponent } from './select-user';
import { SubmenuItemsComponent } from './submenu-items';
import { TopNavComponent } from './top-nav';
import { UserProfileComponent } from './user-profile';

export const ComponentsExport = [LayoutComponent];

export const Components = [
  ...ComponentsExport,
  BottomNavComponent,
  BrandComponent,
  ItemComponent,
  MenuitemComponent,
  MenuItemComponent,
  MenuItemsDropdownComponent,
  SearchBarComponent,
  SelectUserComponent,
  SubmenuItemsComponent,
  TopNavComponent,
  UserProfileComponent,
];
