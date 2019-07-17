import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PermissionsService {

    public permissions: BehaviorSubject<Array<string>>;
    private storedPermissions = [];

    constructor() {
        const permissions = (localStorage.getItem('permissions') && localStorage.getItem('permissions') !== 'undefined') ?
            JSON.parse(localStorage.getItem('permissions')) : null;
        if (permissions && Array.isArray(permissions) && permissions.length > 0) {
            this.permissions = new BehaviorSubject<Array<string>>
            (permissions.filter(item => item['statut'] === true).map(item => item['idPermission']));
        } else {
            this.permissions = new BehaviorSubject<Array<string>>([]);
        }
    }

    public addPermission(permission: string | Array<string>): void {
        if (Array.isArray(permission)) {
            this.storedPermissions = [...this.storedPermissions, ...permission];
        } else {
            this.storedPermissions.push(permission);
        }
        this.permissions.next(this.storedPermissions);
    }

    public removePermission(permission: string): void {
        this.storedPermissions = this.storedPermissions.filter(item => item !== permission);
        this.permissions.next(this.storedPermissions);
    }

    public clearPermissions(): void {
        this.storedPermissions = [];
        this.permissions.next(this.storedPermissions);
    }

    public getPermissions(): Observable<Array<string>> {
        return this.permissions.asObservable();
    }
}
