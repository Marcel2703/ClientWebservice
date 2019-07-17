import { Injectable } from '@angular/core';
import {  HttpParams } from '@angular/common/http';
import {ApiService} from "../api/api.service";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private api: ApiService) { }

     // Sending a GET request to /category/read.php
     getCategories(): Observable<any> {
      return this.api.get('category/read.php')
        .catch(this.api.handleError);
    }
}
