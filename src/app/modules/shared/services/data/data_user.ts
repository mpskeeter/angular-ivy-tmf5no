import { User } from '../../../shared-types';
import { getRawRole } from './data_role';

//#region Users
export const rawRawUsers: Partial<User>[] = [
  {
    id: 1,
    name: 'John Doe',
    displayName: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    emailAddress: 'johndoe@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1)],
    color: '#3670b2',
    status: 'online',
    settings: {
      autoPlay: true,
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    displayName: 'Jane Smith',
    firstName: 'Jane',
    lastName: 'Smith',
    emailAddress: 'janesmith@sample.com',
    picture: 'https://randomuser.me/api/portraits/women/6.jpg',
    roles: [getRawRole(1)],
    color: '#468547',
    status: 'offline',
    settings: {
      autoPlay: true,
    },
  },
  {
    id: 3,
    name: 'Jim Johnson',
    displayName: 'Jim Johnson',
    firstName: 'Jim',
    lastName: 'Johnson',
    emailAddress: 'jimdoe@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1)],
    color: '#3670b2',
    settings: {
      autoPlay: true,
    },
  },
  {
    id: 4,
    name: 'Timothy Smith',
    displayName: 'Timothy Smith',
    firstName: 'Timothy',
    lastName: 'smith',
    emailAddress: 'timsmith@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1), getRawRole(4)],
    color: '#3670b2',
    settings: {
      autoPlay: true,
    },
  },
];

export const getRawRawUser = (userId: number): Partial<User> =>
  rawRawUsers.find((user) => user.id === userId);

export const rawUsers: Partial<User>[] = [
  ...[1, 2, 3, 4].map(
    (id: number) => ({
      ...getRawRawUser(id),
      enrollments: getRawEnrollmentsForUser(id),
    })
  ),
];

export const getRawUser = (userId: number): Partial<User> =>
  rawUsers.find((user: Partial<User>) => user.id === userId);

//#endregion
