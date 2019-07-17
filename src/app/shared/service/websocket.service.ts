import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WebsocketService {
  private static RECONNECT_INTERVAL = 60000;
  timer: any;

  constructor() { }

  private subject: Subject<any>;

  public connect(url: string): Subject<any> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url): Subject<any> {
    const token = localStorage.getItem('token');
    if (token) {
      document.cookie = 'ARTIBIP_TOKEN=' + token.split(' ')[1];
    }
    const ws = new WebSocket(url);
    const observable = Observable.create(
      (obs: Observer<any>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = ((e: any) => {
          if (ws.readyState !== 1) {
            this.timer = setInterval(() => this.create(url), WebsocketService.RECONNECT_INTERVAL);
          } else {
            clearInterval(this.timer);
          }
          obs.error(e);
        });
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
    });
    const observer = {
      next: (data: any) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Subject.create(observer, observable);
  }
}
