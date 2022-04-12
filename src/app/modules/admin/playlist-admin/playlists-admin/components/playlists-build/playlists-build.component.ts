import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-build',
  templateUrl: './playlists-build.component.html',
})
export class PlaylistsBuildComponent {
  constructor(
    public service: PlaylistItemService,
    public playlist: PlaylistService,
  ) {}
}
