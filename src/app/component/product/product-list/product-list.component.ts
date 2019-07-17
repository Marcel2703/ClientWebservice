import { Component, OnInit } from '@angular/core';
import {MessageDTO} from '../../../model/message-dto';
import {ProductService} from '../../../services/product/product.service'
import { Product } from '../../../model/product'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { MessageShared } from '../../../shared/subjects/message-shared';
import { FormUtilsService } from '../../../shared/service/form-utils.service';
import { BreadcrumbsService } from '../../../shared/subjects/breadcrumbs.service';
import { PermissionsService } from '../../../shared/service/permissions.service';
import { ToastService } from 'src/app/shared';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  loadingProduct = false;
  product = new Product();
  products: Array<any>;
  loadingDelete = false;

  constructor(
    public productService: ProductService,
    private messageShared: MessageShared,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private formService: FormUtilsService,
    private breadcrumbsService: BreadcrumbsService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  deleteProduct(id: any, index: number): void {
    this.loadingDelete = true;
    this.productService.deleteProduct(id).subscribe(
      res => {
        if (res.statusCode = 201) {
          this.products = this.products.filter( (product: any) => {
            return product.id !== id;
          });
          document.getElementById('closeButton' + index).click();
          this.messageShared.setMessage(new MessageDTO(res['message'], this.toastService.typeToast.success, 'SUCCES'));
        } else {
          this.messageShared.setMessage(new MessageDTO(res['message'], this.toastService.typeToast.error, 'ERREUR'));
        }
        this.loadingDelete = false;
      },
      err => {
        this.messageShared.setMessage(new MessageDTO(err, this.toastService.typeToast.error, 'ERREUR'));
        this.loadingDelete = false;
      }
    );
  }

  editProduct(id: any): void {
    this.router.navigate(['product/read_one', id]);
  }
/*
  viewProduct(id: any): void {
    this.router.navigate(['/product/view', id]);
  }*/

  getProducts(): void
  {
    this.productService.getProducts()
    .subscribe( res => {
          if (Array.isArray(res['records'])) {
            this.products = res['records'];
            console.log(this.products); 
          }     
    },
    err => {
 
    });

  }

}
