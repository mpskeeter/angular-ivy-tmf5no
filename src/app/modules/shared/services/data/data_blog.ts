import { BlogItem } from '../../../shared-types';
import { getRawUser } from './data_user';
import { getRawStatus } from './data_status';

//#region RawBlogItem
export const rawRawBlogItem: Partial<BlogItem>[] = [
  {
    id: 1,
    title: 'Some Tips and Tricks in the latest version of Angular',
    slug: 'tips-tricks-latest-angular',
    content: 'This will be a continuing series of posts that describe some hidden gems in Angular',
    image:
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0REMDAzMTt9Cgkuc3Qxe2ZpbGw6I0MzMDAyRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxMjUsMzAgMTI1LDMwIDEyNSwzMCAzMS45LDYzLjIgNDYuMSwxODYuMyAxMjUsMjMwIDEyNSwyMzAgMTI1LDIzMCAyMDMuOSwxODYuMyAyMTguMSw2My4yIAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTI1LDMwIDEyNSw1Mi4yIDEyNSw1Mi4xIDEyNSwxNTMuNCAxMjUsMTUzLjQgMTI1LDIzMCAxMjUsMjMwIDIwMy45LDE4Ni4zIDIxOC4xLDYzLjIgMTI1LDMwIAkiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQoJCUwxMjUsNTIuMXogTTE0MiwxMzUuNEgxMDhsMTctNDAuOUwxNDIsMTM1LjR6Ii8+CjwvZz4KPC9zdmc+Cg==',
    isFeatured: true,
    authorId: 4,
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    publishedAt: new Date('2021-04-24'),
    author: getRawUser(4),
    status: getRawStatus(1),
  },
  {
    id: 2,
    title: 'Starter Kit in Building Your Own Framework',
    slug: 'starter-kit',
    content: 'Learn how to use the tools that are available to create the framework that is right for you.',
    image:
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+Cjx0aXRsZT5UeXBlU2NyaXB0IGxvZ288L3RpdGxlPgogPHJlY3Qgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHJ4PSI1MCIgZmlsbD0iIzMxNzhjNiIvPgogPHBhdGggZD0ibTMxNyA0MDd2NTBjOC4xIDQuMiAxOCA3LjMgMjkgOS40czIzIDMuMSAzNSAzLjFjMTIgMCAyMy0xLjEgMzQtMy40IDExLTIuMyAyMC02LjEgMjgtMTEgOC4xLTUuMyAxNS0xMiAxOS0yMXM3LjEtMTkgNy4xLTMyYzAtOS4xLTEuNC0xNy00LjEtMjRzLTYuNi0xMy0xMi0xOGMtNS4xLTUuMy0xMS0xMC0xOC0xNHMtMTUtOC4yLTI0LTEyYy02LjYtMi43LTEyLTUuMy0xOC03LjktNS4yLTIuNi05LjctNS4yLTEzLTcuOC0zLjctMi43LTYuNS01LjUtOC41LTguNC0yLTMtMy02LjMtMy0xMCAwLTMuNCAwLjg5LTYuNSAyLjctOS4zczQuMy01LjEgNy41LTcuMWMzLjItMiA3LjItMy41IDEyLTQuNiA0LjctMS4xIDkuOS0xLjYgMTYtMS42IDQuMiAwIDguNiAwLjMxIDEzIDAuOTQgNC42IDAuNjMgOS4zIDEuNiAxNCAyLjkgNC43IDEuMyA5LjMgMi45IDE0IDQuOSA0LjQgMiA4LjUgNC4zIDEyIDYuOXYtNDdjLTcuNi0yLjktMTYtNS4xLTI1LTYuNXMtMTktMi4xLTMxLTIuMWMtMTIgMC0yMyAxLjMtMzQgMy44cy0yMCA2LjUtMjggMTJjLTguMSA1LjQtMTQgMTItMTkgMjEtNC43IDguNC03IDE4LTcgMzAgMCAxNSA0LjMgMjggMTMgMzggOC42IDExIDIyIDE5IDM5IDI3IDYuOSAyLjggMTMgNS42IDE5IDguM3MxMSA1LjUgMTUgOC40YzQuMyAyLjkgNy43IDYuMSAxMCA5LjUgMi41IDMuNCAzLjggNy40IDMuOCAxMiAwIDMuMi0wLjc4IDYuMi0yLjMgOXMtMy45IDUuMi03LjEgNy4yLTcuMSAzLjYtMTIgNC44Yy00LjcgMS4xLTEwIDEuNy0xNyAxLjctMTEgMC0yMi0xLjktMzItNS43LTExLTMuOC0yMS05LjUtMzAtMTd6bS04NC0xMjNoNjR2LTQxaC0xNzl2NDFoNjR2MTgzaDUxeiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0eWxlPSJmaWxsOiNmZmYiLz4KPC9zdmc+Cg==',
    isFeatured: true,
    authorId: 2,
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    publishedAt: new Date('2021-04-24'),
    author: getRawUser(2),
    status: getRawStatus(1),
  },
];

export const getRawRawBlogItem = (blogItemId: number): Partial<BlogItem> =>
  rawRawBlogItem.find((blogItem) => blogItem.id === blogItemId);
//#endregion
