import { Injectable, Type } from '@angular/core';
import { MimeType } from '../../shared-types';
import { CrudService } from './crud.service';
import { mimeTypes } from './rawData';

import { VideoPlayerComponent, MsPlayerComponent } from '../../content-player';

@Injectable({ providedIn: 'root' })
export class ContentPlayerService {
  mimeTypes = mimeTypes;
  async getPlayer(
    mimeType: string
  ): Promise<Type<VideoPlayerComponent | MsPlayerComponent>> {
    let component: Type<VideoPlayerComponent | MsPlayerComponent>;

    // const mimeTypeRecord = this.mimeTypes.find(
    //   (type) => type.name === mimeType
    // );

    // const comp = await import(mimeTypeRecord?.player);

    // if (mimeTypeRecord.player.includes('video-player')) {
    //   component = comp.VideoPlayerComponent;
    //   return component;
    // }

    // if (mimeTypeRecord.player.includes('ms-player')) {
    //   component = comp.MsPlayerComponent;
    //   return component;
    // }

    switch (mimeType) {
      case 'application/mp4':
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
