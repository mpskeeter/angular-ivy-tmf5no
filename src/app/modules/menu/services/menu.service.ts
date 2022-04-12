import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Category, NavbarItem } from '../../shared-types';
import { CategoryService } from '../../shared';

@Injectable({ providedIn: 'root' })
export class MenuService {
  //#region Admin
  #_adminMenu: Partial<NavbarItem>[] = [
    {
      link: '/admin/user',
      text: 'User',
    },
    {
      link: '/admin/course',
      text: 'Course',
    },
    {
      link: '/admin/playlist',
      text: 'Playlist',
    },
    {
      link: '/admin/role',
      text: 'Role',
    },
  ];
  #adminMenu: BehaviorSubject<Partial<NavbarItem>[]> = new BehaviorSubject<
    Partial<NavbarItem>[]
  >(this.#_adminMenu);
  public adminMenu$: Observable<Partial<NavbarItem>[]> =
    this.#adminMenu.asObservable();
  //#endregion

  //#region AdminPlaylistMenu
  #_adminPlaylistMenu: Partial<NavbarItem>[] = [
    {
      link: '/admin/playlist/playlists',
      text: 'Playlist',
    },
    {
      link: '/admin/playlist/playlists-item',
      text: 'Playlist Items',
    },
    {
      link: '/admin/playlist/playlists-source',
      text: 'Playlist Sources',
    },
  ];

  #adminPlaylistMenu: BehaviorSubject<Partial<NavbarItem>[]> =
    new BehaviorSubject<Partial<NavbarItem>[]>(this.#_adminPlaylistMenu);
  public adminPlaylistMenu$: Observable<Partial<NavbarItem>[]> =
    this.#adminPlaylistMenu.asObservable();
  //#endregion

  //#region ProfileMenu
  #_profileMenu: Partial<NavbarItem>[] = [
    {
      link: '/profile',
      text: 'Your Profile',
    },
    {
      link: '/settings',
      text: 'Settings',
    },
  ];

  #profileMenu: BehaviorSubject<Partial<NavbarItem>[]> = new BehaviorSubject<
    Partial<NavbarItem>[]
  >(this.#_profileMenu);
  public profileMenu$: Observable<Partial<NavbarItem>[]> =
    this.#profileMenu.asObservable();
  //#endregion

  //#region MainMenu
  #_mainMenu: Partial<NavbarItem>[] = [
    // {
    //   link: '/',
    //   text: 'Home',
    // },
    {
      link: '/course',
      text: 'Courses',
    },
    {
      link: '/mycourses',
      text: 'My Courses',
    },
    {
      link: '/admin',
      text: 'Admin',
      role: 'admin',
    },
    {
      link: '/support',
      text: 'Support',
    },
  ];

  #mainMenu: BehaviorSubject<Partial<NavbarItem>[]> = new BehaviorSubject<
    Partial<NavbarItem>[]
  >(this.#_mainMenu);
  public mainMenu$: Observable<Partial<NavbarItem>[]> =
    this.#mainMenu.asObservable();
  //#endregion

  //#region Support
  #_supportMenu: Partial<NavbarItem>[] = [
    {
      link: '/support/course-request',
      text: 'Request a Course',
    },
    {
      link: '/support/help',
      text: 'Help',
    },
  ];
  #supportMenu: BehaviorSubject<Partial<NavbarItem>[]> = new BehaviorSubject<
    Partial<NavbarItem>[]
  >(this.#_supportMenu);
  public supportMenu$: Observable<Partial<NavbarItem>[]> =
    this.#supportMenu.asObservable();
  //#endregion

  //#region MainMenuDropdown
  #_mainMenuDropdown: Partial<NavbarItem>[] = [];

  #_AdminMenuDropdown: Partial<NavbarItem>[] = [
    {
      link: '/admin/user',
      text: 'User Administration',
    },
    {
      link: '/admin/course',
      text: 'Course Administration',
    },
    {
      link: '/admin/courses-requested',
      text: 'Courses Requested',
    },
    {
      link: '/admin/maintenance-log',
      text: 'Maintenance Log',
    },
    {
      link: '/admin/app-administration',
      text: 'Application Administration',
    },
    {
      link: '/admin/playlist',
      text: 'Playlist Administration',
    },
    {
      link: '/admin/reports',
      text: 'Reports',
    },
  ];

  #_SupportMenuDropdown: Partial<NavbarItem>[] = [
    {
      link: '/support/course-request',
      text: 'Request a Course',
    },
    {
      link: '/support/help',
      text: 'Help',
    },
  ];

  #mainMenuDropdown: BehaviorSubject<Partial<NavbarItem>[]> =
    new BehaviorSubject<Partial<NavbarItem>[]>(this.#_mainMenuDropdown);
  public mainMenuDropdown$: Observable<Partial<NavbarItem>[]> =
    this.#mainMenuDropdown.asObservable();
  //#endregion

  constructor(private categories: CategoryService) {
    this.buildDropdownMenu();
  }

  buildDropdownMenu() {
    const findIndex = (label: string) =>
      this.#_mainMenuDropdown.findIndex(
        (item: Partial<NavbarItem>) => item.text === label,
      );

    this.#_mainMenuDropdown = this.#_mainMenu;
    this.categories.items$
      .pipe(
        map((categories: Partial<Category>[]) => {
          const categoryListings: Partial<NavbarItem>[] = [
            {
              link: '/course',
              text: 'All Courses',
            },
          ];
          categories?.map((category: Partial<Category>): void => {
            const item: Partial<NavbarItem> = {
              link: `/course/category/${category.id}`,
              text: category.name,
            };
            categoryListings.push(item);
          });
          this.#_mainMenuDropdown[findIndex('Courses')].items =
            categoryListings;
          this.#mainMenuDropdown.next(this.#_mainMenuDropdown);
        }),
      )
      .subscribe();

    this.#_mainMenuDropdown[findIndex('Admin')].items =
      this.#_AdminMenuDropdown;

    this.#_mainMenuDropdown[findIndex('Support')].items =
      this.#_SupportMenuDropdown;

    this.categories.get();
  }
}
