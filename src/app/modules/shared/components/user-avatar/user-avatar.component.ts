import { Component, Input } from '@angular/core';
import { AuthenticatedUserService } from '../../services';
import { User } from '../../../shared-types';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
})
export class UserAvatarComponent {
  @Input() profile: Partial<User> = {};
  constructor(public service: AuthenticatedUserService) {}
  initials(name: string) {
    let initials = '';

    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) === ' ') {
        continue;
      }

      if (name.charAt(i) === name.charAt(i).toUpperCase()) {
        initials += name.charAt(i);

        if (initials.length == 2) {
          break;
        }
      }
    }

    return initials;
  }
}
