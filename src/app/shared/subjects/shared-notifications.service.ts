import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SharedNotificationsMsgService {
    private notificationSubject: Subject<any> = new Subject<any>();

    setNotification(notification: any): void {
        this.notificationSubject.next(notification);
    }

    getNotifications(): Observable<any> {
        return this.notificationSubject.asObservable();
    }
}

