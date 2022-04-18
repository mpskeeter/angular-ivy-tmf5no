import { LayoutComponent } from './layout';
import { BottomNavComponent } from './bottom-nav';
import { BrandComponent } from './brand';
import { MenuItemComponent } from './menu-item';
import { MenuItemsDropdownComponent } from './menu-items-dropdown';
import { SearchBarComponent } from './search-bar';
import { SelectUserComponent } from './select-user';
import { TopNavComponent } from './top-nav';
import { UserProfileComponent } from './user-profile';

export const ComponentsExport = [LayoutComponent];

export const Components = [
  ...ComponentsExport,
  BottomNavComponent,
  BrandComponent,
  MenuItemComponent,
  MenuItemsDropdownComponent,
  SearchBarComponent,
  SelectUserComponent,
  TopNavComponent,
  UserProfileComponent,
];
