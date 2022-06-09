import { BlogItem } from '../../../shared-types';
import { getRawUser } from './data_user';
import { getRawStatus } from './data_status';

//#region RawBlogItem
export const rawBlogItem: Partial<BlogItem>[] = [
  {
    id: 1,
    title: 'Some Tips and Tricks in the latest version of Angular',
    slug: 'tips-tricks-latest-angular',
    content:
      'This will be a continuing series of posts that describe some hidden gems in Angular',
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
    content:
      'Learn how to use the tools that are available to create the framework that is right for you.',
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
  {
    id: 3,
    title: 'The Benefits of Unconventional Management',
    slug: 'benefits-unconventional-management',
    content:
      'People are our most valuable resource.  See how one management style has changed the culture.',
    image:
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTI4MC4wMDAwMDBwdCIgaGVpZ2h0PSIxMjgwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTI4MC4wMDAwMDAgMTI4MC4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPG1ldGFkYXRhPgpDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xNSwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTcKPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTI4MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik04Njk1IDEwNjk5IGMtODA5IC02MSAtMTUwMSAtNDI1IC0xODQzIC05NzAgLTg3IC0xMzggLTE1NyAtMzE2Ci0xODkgLTQ3OSAtMjAgLTEwNyAtMjMgLTM0NyAtNCAtNDUwIDU3IC0zMTggMjU1IC02NDMgNTMzIC04NzYgNTEgLTQyIDk0IC04MAo5NSAtODMgMSAtMyAtMTQzIC0yMDQgLTMyMSAtNDQ2IC0xNzcgLTI0MiAtMzIwIC00NDEgLTMxNiAtNDQzIDMgLTEgMjg3IDEyMwo2MzEgMjc3IGw2MjUgMjc5IDcxIC0yNCBjMTg2IC02MyA0MzQgLTExMyA2NTcgLTEzNSAxNzcgLTE3IDU1NiAtNiA3MzAgMjAKNTU1IDg2IDEwNDUgMzE3IDEzNzYgNjUwIDIzMiAyMzMgMzcwIDQ4MiA0MjYgNzY4IDIzIDExNyAyMyAzMzcgMCA0NTcgLTk3CjUwMSAtNDQ2IDkxMSAtMTAxMSAxMTg2IC00MzYgMjEzIC05NTAgMzA3IC0xNDYwIDI2OXoiLz4KPHBhdGggZD0iTTQ1NjAgOTM1NCBjLTE5IC0yIC04MiAtOSAtMTQwIC0xNSAtNTUwIC01OCAtMTA1OSAtMzAwIC0xMjk4IC02MTgKLTIzNiAtMzEzIC0yMzEgLTY3MyAxMyAtOTc5IDI0NSAtMzA2IDY5OSAtNTIwIDEyNjYgLTU5OCAxNjkgLTIzIDUyNyAtMjMgNzAyCjAgMTMwIDE3IDMyNSA1NSA0MDcgODAgNTEgMTUgLTEwIDM0IDUyMCAtMTY0IDU0NSAtMjA0IDUzMSAtMTk5IDUxOCAtMTgxIC03CjggLTEyMiAxNDEgLTI1NSAyOTMgLTEzNCAxNTMgLTI0MyAyODEgLTI0MyAyODYgMCA0IDMxIDI3IDY3IDUyIDg4IDU5IDIyMAoxODUgMjgzIDI3MCAxNzYgMjM4IDIwNyA1MjAgODQgNzc5IC01OSAxMjUgLTE0NSAyMzQgLTI2NCAzMzUgLTI3MiAyMjkgLTY0MgozNzkgLTEwODkgNDQyIC0xMDEgMTQgLTQ5NyAyNyAtNTcxIDE4eiIvPgo8cGF0aCBkPSJNMjEwMCA3NDk5IGMtNjQ3IC03OSAtMTE3NiAtMzU3IC0xNDk5IC03ODYgLTI4OSAtMzg0IC0zNjQgLTg2MgotMjA0IC0xMjg4IDM0OCAtOTI4IDE2NjcgLTE0MTQgMjc5OSAtMTAzMSBsMTAxIDM0IDU2OCAtMjY5IGMzMTIgLTE0OCA1NzAKLTI2OCA1NzIgLTI2NSAyIDIgLTEyNyAxOTQgLTI4NyA0MjYgLTE2MCAyMzMgLTI4OSA0MjYgLTI4OCA0MzAgMiA1IDMyIDM0IDY4CjY2IDMwMiAyNjggNDc5IDU5NyA1MDkgOTUwIDcyIDgyOSAtNjM0IDE1NTYgLTE2NjkgMTcyMCAtMTIzIDE5IC01NTIgMjggLTY3MAoxM3oiLz4KPHBhdGggZD0iTTEwMzg3IDczMzAgYy03OTIgLTY3IC0xNDQ2IC00MTEgLTE2ODIgLTg4NSAtNjkgLTE0MCAtODUgLTIwMSAtOTIKLTM1MCAtMTUgLTM0NCAxNDggLTYwOSA1NTIgLTkwMSBsMjkgLTIwIC0yOTEgLTMzNCBjLTE2MSAtMTg0IC0yOTEgLTMzNiAtMjg5Ci0zMzcgMiAtMiAxNjcgNTggMzY3IDEzMyAyMDAgNzQgNDU1IDE2OSA1NjUgMjEwIGwyMDIgNzYgMTM5IC0zNSBjNjg2IC0xNzMKMTQ2NSAtMTAzIDIwNDggMTgzIDQ5OSAyNDUgNzc1IDU5NyA3NzUgOTg5IDAgMjUyIC0xMDIgNDc1IC0zMTAgNjgxIC0zMDMgMzAwCi03NjYgNDk5IC0xMzM1IDU3NSAtMTQzIDE5IC01MjYgMjcgLTY3OCAxNXoiLz4KPHBhdGggZD0iTTY0ODkgNjQ5MCBjLTM2NyAtNTggLTY0OCAtMjUwIC03OTggLTU0NiAtNjkgLTEzNiAtODYgLTIxNCAtODYKLTM5NCAxIC0xNDkgMiAtMTU5IDM0IC0yNTIgNDAgLTExNyAxMTEgLTIzNiAxOTIgLTMyMiAzMiAtMzUgNTkgLTY5IDU5IC03NSAwCi02IC02NSAtMTE4IC0xNDQgLTI0OCAtNzkgLTEzMSAtMTQzIC0yNDAgLTE0MSAtMjQxIDIgLTIgMTI5IDY0IDI4MyAxNDcgMTUzCjgzIDI4NCAxNTEgMjkwIDE1MSA3IDAgNDUgLTExIDg2IC0yNSA0ODQgLTE2MyAxMDE4IDMgMTI4NSAzOTggODggMTI5IDEzMQoyNjYgMTM4IDQzNyA2IDE0MyAtOCAyMzEgLTU2IDM1NSAtMTExIDI4OCAtMzk1IDUyMCAtNzI4IDU5NiAtMTAwIDIyIC0zMjYgMzMKLTQxNCAxOXoiLz4KPHBhdGggZD0iTTEwNTQ4IDQwNjQgYy0zMTMgLTc1IC00NjcgLTQxMCAtMzIyIC02OTYgMzQgLTY3IDEzNSAtMTY4IDIwMiAtMjAyCjE5NSAtOTkgNDE3IC02NCA1NjcgODggNzEgNzMgMTExIDE1MCAxMzMgMjU3IDE0IDY2IDE0IDg4IDQgMTUxIC0zNCAxOTggLTE4MgozNTggLTM3MyA0MDMgLTc4IDE4IC0xMzUgMTggLTIxMSAtMXoiLz4KPHBhdGggZD0iTTY5MjMgNDA1NSBjLTg1IC0yMyAtMTY0IC03MCAtMjI0IC0xMzIgLTEwNyAtMTEwIC0xNDQgLTIwNyAtMTM3Ci0zNjMgMyAtOTEgNyAtMTA0IDQ2IC0xODMgMTI1IC0yNTIgNDE2IC0zNDUgNjcwIC0yMTMgNjkgMzYgMTUxIDEyNSAxOTQgMjEzCjM5IDc5IDQzIDkyIDQ2IDE4MyA3IDE1NiAtMjggMjUwIC0xMzIgMzU4IC0xMjIgMTI3IC0zMDEgMTgwIC00NjMgMTM3eiIvPgo8cGF0aCBkPSJNODcyMyA0MDU1IGMtODUgLTIzIC0xNjQgLTcwIC0yMjQgLTEzMiAtMTA3IC0xMTAgLTE0NCAtMjA3IC0xMzcKLTM2MyAzIC05MSA3IC0xMDQgNDYgLTE4MyAxMjUgLTI1MiA0MTYgLTM0NSA2NzAgLTIxMyA2OSAzNiAxNTEgMTI1IDE5NCAyMTMKMzkgNzkgNDMgOTIgNDYgMTgzIDcgMTU2IC0yOCAyNTAgLTEzMiAzNTggLTEyMiAxMjcgLTMwMSAxODAgLTQ2MyAxMzd6Ii8+CjxwYXRoIGQ9Ik0zMjQ4IDQwNDQgYy0zMTMgLTc1IC00NjcgLTQxMCAtMzIyIC02OTYgMzQgLTY3IDEzNSAtMTY4IDIwMiAtMjAyCjE5NSAtOTkgNDE3IC02NCA1NjcgODggNzEgNzMgMTExIDE1MCAxMzMgMjU3IDE0IDY2IDE0IDg4IDQgMTUxIC0zNCAxOTggLTE4MgozNTggLTM3MyA0MDMgLTc4IDE4IC0xMzUgMTggLTIxMSAtMXoiLz4KPHBhdGggZD0iTTUwOTQgNDA0NiBjLTEyNCAtMzkgLTI0NSAtMTQwIC0yOTggLTI0OCAtNTUgLTExNCAtNjggLTIxOCAtNDEKLTMyMyA0MCAtMTU0IDEyNCAtMjU5IDI2MiAtMzI3IDc5IC0zOSA5MiAtNDMgMTg0IC00NiAxNTcgLTcgMjU2IDMxIDM2NiAxMzkKMTkwIDE4NiAxODkgNDk1IC00IDY4MCAtMTA0IDEwMSAtMTk5IDEzOSAtMzQyIDEzOCAtNDcgMCAtMTA0IC02IC0xMjcgLTEzeiIvPgo8cGF0aCBkPSJNMTQyMyA0MDM1IGMtODUgLTIzIC0xNjQgLTcwIC0yMjQgLTEzMiAtMTA3IC0xMTAgLTE0NCAtMjA3IC0xMzcKLTM2MyAzIC05MSA3IC0xMDQgNDYgLTE4MyAxMjUgLTI1MiA0MTYgLTM0NSA2NzAgLTIxMyA2OSAzNiAxNTEgMTI1IDE5NCAyMTMKMzkgNzkgNDMgOTIgNDYgMTgzIDcgMTU2IC0yOCAyNTAgLTEzMiAzNTggLTEyMiAxMjcgLTMwMSAxODAgLTQ2MyAxMzd6Ii8+CjxwYXRoIGQ9Ik02NTU4IDMxNTIgYy04IC05IC05IC00MDkgLTQgLTEzNDUgNiAtMTEzOSAxMCAtMTMzNSAyMiAtMTM1NSAxNAotMjIgMTggLTIyIDIxMiAtMjIgMTk1IDAgMTk5IDAgMjIwIDIzIDIyIDIzIDIyIDI0IDIyIDUyMCAwIDMyNSAzIDQ5NyAxMCA0OTcKNyAwIDEwIC0xNzQgMTAgLTUwMyAwIC00NzUgMSAtNTA1IDE4IC01MjAgMTYgLTE1IDQ2IC0xNyAyMTUgLTE3IDE3OCAwIDE5OSAyCjIxNSAxOCAxOCAxOCAxOSA2NCAyNSA4OTggMTAgMTI4MCA5IDE4MDIgLTMgMTgwOSAtNiA0IC01MiA3IC0xMDMgNyAtNzMgLTEKLTEwMiAtNSAtMTQyIC0yMyAtMTUwIC02NyAtMzQ0IC02NiAtNDc4IDIgLTQ4IDI1IC0yMjIgMzMgLTIzOSAxMXoiLz4KPHBhdGggZD0iTTc1NDYgMzE0OCBjLTEwIC0zNyAtNyAtMTExMiAzIC0xMTI3IDEyIC0xOSA0NCAtNiA5NCAzOCA2OCA2MCA2Nwo1MSA2NyA1MzIgbDAgNDMyIC0yNSA0MiBjLTIzIDQwIC00OSA2MyAtMTA0IDkyIC0zMCAxNiAtMjggMTcgLTM1IC05eiIvPgo8cGF0aCBkPSJNODM1OCAzMTUyIGMtOCAtOSAtOSAtNDA5IC00IC0xMzQ1IDYgLTExMzkgMTAgLTEzMzUgMjIgLTEzNTUgMTQKLTIyIDE4IC0yMiAyMTIgLTIyIDE5NSAwIDE5OSAwIDIyMCAyMyAyMiAyMyAyMiAyNCAyMiA1MjAgMCAzMjUgMyA0OTcgMTAgNDk3CjcgMCAxMCAtMTc0IDEwIC01MDMgMCAtNDc1IDEgLTUwNSAxOCAtNTIwIDE2IC0xNSA0NiAtMTcgMjE1IC0xNyAxNzggMCAxOTkgMgoyMTUgMTggMTggMTggMTkgNjQgMjUgODk4IDEwIDEyODAgOSAxODAyIC0zIDE4MDkgLTYgNCAtNTIgNyAtMTAzIDcgLTczIC0xCi0xMDIgLTUgLTE0MiAtMjMgLTE1MCAtNjcgLTM0NCAtNjYgLTQ3OCAyIC00OCAyNSAtMjIyIDMzIC0yMzkgMTF6Ii8+CjxwYXRoIGQ9Ik05MzQ2IDMxNDggYy0xMCAtMzcgLTcgLTExMTIgMyAtMTEyNyAxMiAtMTkgNDQgLTYgOTQgMzggNjggNjAgNjcKNTEgNjcgNTMyIGwwIDQzMiAtMjUgNDIgYy0yMyA0MCAtNDkgNjMgLTEwNCA5MiAtMzAgMTYgLTI4IDE3IC0zNSAtOXoiLz4KPHBhdGggZD0iTTEwMDg2IDMxNDAgYy0yNiAtMTcgLTYwIC01MSAtNzYgLTc3IGwtMzAgLTQ3IDAgLTQzMSAwIC00MzEgMzAgLTQ3CmMyOSAtNDUgOTUgLTk3IDEyNSAtOTcgMTMgMCAxNSA2NyAxNSA1NzQgMCAzMTYgLTQgNTc3IC05IDU4MCAtNCAzIC0yOSAtOAotNTUgLTI0eiIvPgo8cGF0aCBkPSJNMTAxNzAgMTgyNSBsMCAtMTM0NiAyNSAtMjQgYzI0IC0yNSAyNiAtMjUgMjA4IC0yNSAxNzEgMCAxODYgMSAyMTEKMjEgbDI2IDIwIDAgNTA1IGMwIDQ0MSAyIDUwNCAxNSA1MDQgMTMgMCAxNSAtNjMgMTUgLTUwOSAwIC00NjEgMiAtNTEwIDE3Ci01MjIgMTIgLTExIDYwIC0xNCAyMDkgLTE0IDE4MCAwIDE5NSAxIDIxMyAyMCAxOSAyMCAyMCA0MyAyMyAxMzY1IGwzIDEzNDUKLTk1IDMgYy04NCAyIC0xMDEgMCAtMTUzIC0yNCAtMzMgLTE0IC05OCAtMzMgLTE0NSAtNDEgLTEwNyAtMTggLTIxMyAtNiAtMzE3CjM4IC02MCAyNSAtODIgMjkgLTE2MiAyOSBsLTkzIDAgMCAtMTM0NXoiLz4KPHBhdGggZD0iTTExMTYwIDI1OTYgYzAgLTMxNiA0IC01NzcgOSAtNTgwIDEzIC04IDk2IDQ4IDExNyA4MCA0NCA2NCA0NCA2OQo0NCA1MDAgMCAzODggLTEgNDE3IC0xOSA0NTIgLTEwIDIwIC0yNyA0NyAtMzggNTggLTIxIDI1IC04MyA2NCAtMTAwIDY0IC0xMAowIC0xMyAtMTIyIC0xMyAtNTc0eiIvPgo8cGF0aCBkPSJNNDc0MyAzMTQ0IGMtMyAtOSAtMyAtNjE4IDEgLTEzNTMgNyAtMTMzMyA3IC0xMzM2IDI4IC0xMzUzIDE4IC0xNgo0MyAtMTggMjA3IC0xOCAxNjEgMCAxODkgMyAyMDggMTggbDIzIDE3IDIgNTA0IGMyIDM5MyA2IDUwNSAxNiA1MDkgOSAzIDEyCi0xMDMgMTIgLTUwNyBsMCAtNTEwIDIyIC0xNSBjMTggLTEzIDU3IC0xNiAyMTEgLTE2IDE4NiAwIDE4OCAwIDIxMiAyNSBsMjUKMjQgLTIgMTM0MyAtMyAxMzQzIC0xMDAgMCBjLTg2IC0xIC0xMDggLTUgLTE2MiAtMjggLTE1MCAtNjYgLTMzMyAtNTkgLTQ4MQoxNyAtNDQgMjMgLTIxMCAyMyAtMjE5IDB6Ii8+CjxwYXRoIGQ9Ik01NzM3IDMxNTMgYy0xMSAtMTEgLTggLTExNDEgMyAtMTE0OCAyOSAtMTggMTQ1IDkxIDE1NSAxNDcgMyAxOCA1CjIyMiAzIDQ1NCBsLTMgNDIxIC0yOSA0MiBjLTE2IDIzIC00OCA1MyAtNzEgNjcgLTQ2IDI2IC00OSAyNyAtNTggMTd6Ii8+CjxwYXRoIGQ9Ik02NDY4IDMxMzEgYy0yNyAtMTcgLTU3IC00OCAtNzIgLTc0IGwtMjYgLTQ0IDAgLTQzNCAwIC00MzUgMjkgLTQ2CmMzNSAtNTUgMTE3IC0xMTAgMTMyIC04NyAxMCAxNSAxMyAxMTA4IDMgMTEzMyAtOCAyMiAtMTMgMjEgLTY2IC0xM3oiLz4KPHBhdGggZD0iTTgyNjggMzEzMSBjLTI3IC0xNyAtNTcgLTQ4IC03MiAtNzQgbC0yNiAtNDQgMCAtNDM0IDAgLTQzNSAyOSAtNDYKYzM1IC01NSAxMTcgLTExMCAxMzIgLTg3IDEwIDE1IDEzIDExMDggMyAxMTMzIC04IDIyIC0xMyAyMSAtNjYgLTEzeiIvPgo8cGF0aCBkPSJNMTA1OCAzMTMyIGMtOCAtOSAtOSAtNDA5IC00IC0xMzQ1IDYgLTExMzkgMTAgLTEzMzUgMjIgLTEzNTUgMTQKLTIyIDE4IC0yMiAyMTIgLTIyIDE5NSAwIDE5OSAwIDIyMCAyMyAyMiAyMyAyMiAyNCAyMiA1MjAgMCAzMjUgMyA0OTcgMTAgNDk3CjcgMCAxMCAtMTc0IDEwIC01MDMgMCAtNDc1IDEgLTUwNSAxOCAtNTIwIDE2IC0xNSA0NiAtMTcgMjE1IC0xNyAxNzggMCAxOTkgMgoyMTUgMTggMTggMTggMTkgNjQgMjUgODk4IDEwIDEyODAgOSAxODAyIC0zIDE4MDkgLTYgNCAtNTIgNyAtMTAzIDcgLTczIC0xCi0xMDIgLTUgLTE0MiAtMjMgLTE1MCAtNjcgLTM0NCAtNjYgLTQ3OCAyIC00OCAyNSAtMjIyIDMzIC0yMzkgMTF6Ii8+CjxwYXRoIGQ9Ik0yMDQ2IDMxMjggYy0xMCAtMzcgLTcgLTExMTIgMyAtMTEyNyAxMiAtMTkgNDQgLTYgOTQgMzggNjggNjAgNjcKNTEgNjcgNTMyIGwwIDQzMiAtMjUgNDIgYy0yMyA0MCAtNDkgNjMgLTEwNCA5MiAtMzAgMTYgLTI4IDE3IC0zNSAtOXoiLz4KPHBhdGggZD0iTTI3ODYgMzEyMCBjLTI2IC0xNyAtNjAgLTUxIC03NiAtNzcgbC0zMCAtNDcgMCAtNDMxIDAgLTQzMSAzMCAtNDcKYzI5IC00NSA5NSAtOTcgMTI1IC05NyAxMyAwIDE1IDY3IDE1IDU3NCAwIDMxNiAtNCA1NzcgLTkgNTgwIC00IDMgLTI5IC04Ci01NSAtMjR6Ii8+CjxwYXRoIGQ9Ik0yODcwIDE4MDUgbDAgLTEzNDYgMjUgLTI0IGMyNCAtMjUgMjYgLTI1IDIwOCAtMjUgMTcxIDAgMTg2IDEgMjExCjIxIGwyNiAyMCAwIDUwNSBjMCA0NDEgMiA1MDQgMTUgNTA0IDEzIDAgMTUgLTYzIDE1IC01MDkgMCAtNDYxIDIgLTUxMCAxNwotNTIyIDEyIC0xMSA2MCAtMTQgMjA5IC0xNCAxODAgMCAxOTUgMSAyMTMgMjAgMTkgMjAgMjAgNDMgMjMgMTM2NSBsMyAxMzQ1Ci05NSAzIGMtODQgMiAtMTAxIDAgLTE1MyAtMjQgLTMzIC0xNCAtOTggLTMzIC0xNDUgLTQxIC0xMDcgLTE4IC0yMTMgLTYgLTMxNwozOCAtNjAgMjUgLTgyIDI5IC0xNjIgMjkgbC05MyAwIDAgLTEzNDV6Ii8+CjxwYXRoIGQ9Ik0zODYwIDI1NzYgYzAgLTMxNiA0IC01NzcgOSAtNTgwIDEzIC04IDk2IDQ4IDExNyA4MCA0NCA2NCA0NCA2OSA0NAo1MDAgMCAzODggLTEgNDE3IC0xOSA0NTIgLTEwIDIwIC0yNyA0NyAtMzggNTggLTIxIDI1IC04MyA2NCAtMTAwIDY0IC0xMCAwCi0xMyAtMTIyIC0xMyAtNTc0eiIvPgo8cGF0aCBkPSJNNDY2MCAzMTI5IGMtNDMgLTI2IC02NiAtNTIgLTkxIC0xMDEgLTE4IC0zNSAtMTkgLTY0IC0xOSAtNDUyIDAKLTQzMSAwIC00MzYgNDQgLTUwMCAyMSAtMzIgMTA0IC04OCAxMTcgLTgwIDUgMyA5IDI2NCA5IDU4MCAwIDQ1MiAtMyA1NzQgLTEyCjU3NCAtNyAwIC0yOSAtMTAgLTQ4IC0yMXoiLz4KPHBhdGggZD0iTTk2OCAzMTExIGMtMjcgLTE3IC01NyAtNDggLTcyIC03NCBsLTI2IC00NCAwIC00MzQgMCAtNDM1IDI5IC00NgpjMzUgLTU1IDExNyAtMTEwIDEzMiAtODcgMTAgMTUgMTMgMTEwOCAzIDExMzMgLTggMjIgLTEzIDIxIC02NiAtMTN6Ii8+CjwvZz4KPC9zdmc+Cg==',
    isFeatured: true,
    authorId: 3,
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    publishedAt: new Date('2021-04-24'),
    author: getRawUser(3),
    status: getRawStatus(1),
  },
];

export const getRawBlogItem = (blogItemId: number): Partial<BlogItem> =>
  rawBlogItem.find((blogItem) => blogItem.id === blogItemId);
//#endregion
