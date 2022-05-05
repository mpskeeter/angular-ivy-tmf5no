import { Injectable, Type } from '@angular/core';
import { MimeType } from '../../shared-types';
import { CrudService } from './crud.service';
import { mimeTypes } from './rawData';

import { VideoPlayerComponent, MsPlayerComponent } from '../../content-player';

@Injectable({ providedIn: 'root' })
export class MimeTypeService extends CrudService<MimeType> {
  _items = mimeTypes;

  constructor() {
    super();
    this.get();
  }

  async getPlayer(
    mimeType: string
  ): Promise<Type<VideoPlayerComponent | MsPlayerComponent>> {
    let component: Type<VideoPlayerComponent | MsPlayerComponent>;

    switch (mimeType) {
      case 'video/mp4':
        {
          let comp = await import(
            '../../content-player/components/video-player/video-player.component'
          );
          component = comp.VideoPlayerComponent;
        }
        break;
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        {
          let comp = await import(
            '../../content-player/components/ms-player/ms-player.component'
          );
          component = comp.MsPlayerComponent;
        }
        break;
    }

    return component;
  }
}
