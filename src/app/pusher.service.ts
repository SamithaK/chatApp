import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';


@Injectable({
  providedIn: 'root'
})
export class PusherService {
  channel;

  constructor() {
    var pusher = new Pusher('<PUSHER_KEY>', {
      cluster: '<PUSHER_CLUSTER>',
      encrypted: true,
    });
    this.channel = pusher.subscribe('chat');
   }

   public init() {
    return this.channel;
  }
}
