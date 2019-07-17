import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Breadcrumb } from '../../model/breadcrumb';

@Injectable()
export class BreadcrumbsService {
    public breadcrumbsSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    setLink(breadcrumb: Array<Breadcrumb>): void {
        this.breadcrumbsSubject.next(breadcrumb);
    }
    getLink(): Observable<Breadcrumb> {
        return this.breadcrumbsSubject.asObservable();
    }
}
