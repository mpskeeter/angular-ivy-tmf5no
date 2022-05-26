import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { runInZone } from './run-in-zone';
 
interface BroadcastMessage {
  type: string;
  payload: any;
}
 
export class BroadcastService {
  private broadcastChannel: BroadcastChannel;
  private onMessage = new Subject<any>();
 
  constructor(broadcastChannelName: string, private ngZone: NgZone) {
    this.broadcastChannel = new BroadcastChannel(broadcastChannelName);
    this.broadcastChannel.onmessage = (message) => this.onMessage.next(message.data);
  }
 
  publish(message: BroadcastMessage): void {
    this.broadcastChannel.postMessage(message);
  }
 
  messagesOfType(type: string): Observable<BroadcastMessage> {
    return this.onMessage.pipe(
      runInZone(this.ngZone),
      filter(message => message.type === type)
    );
  }
}