import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MessageDTO } from '../../model/message-dto';

@Injectable()
export class MessageShared {
    public messageSubject: BehaviorSubject<any> = new BehaviorSubject({});

    setMessage(message: MessageDTO): void {
        this.messageSubject.next(message);
    }
    getMessage(): Observable<MessageDTO> {
        return this.messageSubject.asObservable();
    }
}

