import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedPendingInscriptionsService {
    private inscriptionsSubject: Subject<any> = new Subject<number>();

    setInscriptions(count: number): void {
        this.inscriptionsSubject.next(count);
    }

    getInscriptions(): Observable<number> {
        return this.inscriptionsSubject.asObservable();
    }
}
