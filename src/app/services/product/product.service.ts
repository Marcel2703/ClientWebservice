import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {ApiService} from "../api/api.service";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Product} from '../../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }

   // Sending a GET request to /product/read.php
   getProducts(): Observable<any> {
    return this.api.get('product/read.php')
      .catch(this.api.handleError);
  }

  // Sending a Post request to product/create.php
  addProduct(product: Product): Observable<any> {
    return this.api.post('product/create.php', product)
        .catch(this.api.handleError);
}


// Sending a Get request to product/read_one.php?id=1
EditProduct(id: any): Observable<any> {
  //const params = this.getHttpParams(id);
  return this.api.get('product/read_one.php', { id: id})
    .catch(this.api.handleError);
  }


  // Sending a Delete request to product/Delete
  deleteProduct(id: any): Observable<any> {
    return this.api.put('product/delete.php' , { id: id})
        .catch(this.api.handleError);
}

// Sending a PUT request to Product/update
UpdateProduct(product: Product): Observable<any> {
  return this.api.put('product/update.php',product)
    .catch(this.api.handleError);
  }

  // Support easy query params for GET renquests
private getHttpParams(args: any) {
  let params = new HttpParams();
  Object.keys(args)
      .filter(key => args[key] != null)
      .forEach(key => {
          Array.isArray(args[key]) ?
              args[key].forEach((item, i) => params = params.append(`${key}[${i}]`, item)) :
              params = params.append(key, args[key]);
      });
  return params;
  }


}
