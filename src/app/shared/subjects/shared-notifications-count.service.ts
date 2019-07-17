import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedNotificationsCountService {
    private countNotificationsSubject: BehaviorSubject<number> = new BehaviorSubject(0);

    setNotificationsCount(count: number): void {
        this.countNotificationsSubject.next(count);
    }

    getNotificationsCount(): Observable<number> {
        return this.countNotificationsSubject.asObservable();
    }
}
