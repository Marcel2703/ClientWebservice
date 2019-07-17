import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Breadcrumb } from '../../model/breadcrumb';

@Injectable()
export class HeaderLinkService {
    public headerLinkSubject: Subject<any> = new Subject();

    setLink(breadcrumb: Array<Breadcrumb>): void {
        this.headerLinkSubject.next(breadcrumb);
    }
    getLink(): Observable<Breadcrumb> {
        return this.headerLinkSubject.asObservable();
    }
}
