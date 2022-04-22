import { Component, OnInit } from '@angular/core';
import { User, Role } from '../../../../shared-types';
import { UserService, RoleService } from '../../../../shared';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css'],
})
export class UserRolesComponent implements OnInit {
  constructor(
    public userService: UserService,
    public roleService: RoleService,
  ) {}

  ngOnInit() {
    this.userService.get();
    this.roleService.get();
  }

  isRole(user: Partial<User>, role: Partial<Role>): boolean {
    return (
      !!(user?.roles as Partial<Role>[]).find(
        (userRole: Partial<Role>) => userRole.id === role.id,
      ) || false
    );
  }
}
