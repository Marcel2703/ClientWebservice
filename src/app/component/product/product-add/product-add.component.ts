import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { MessageShared } from '../../../shared/subjects/message-shared';
import {MessageDTO} from '../../../model/message-dto';
import {ProductService} from '../../../services/product/product.service'
import { Product } from '../../../model/product'
import { FormUtilsService } from '../../../shared/service/form-utils.service';
import { BreadcrumbsService } from '../../../shared/subjects/breadcrumbs.service';
import { PermissionsService } from '../../../shared/service/permissions.service';
import { ToastService } from 'src/app/shared';
import {CategoryService} from '../../../services/category/category.service'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  form: FormGroup;
  product = new Product();
  errors = [];
  loading: any;
  showErrors = false;
  loadingAdd = false;
  categories: Array<any>;

  constructor(
    public productService: ProductService,
    private messageShared: MessageShared,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private formService: FormUtilsService,
    private breadcrumbsService: BreadcrumbsService,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required],
      'description': ['', Validators.required],
      'category_id': ['', Validators.required]

    });
   }

  ngOnInit() {
    this.getCategories();
  }
  addProduct(): void {
    if (this.form.valid)
    {
      this.loadingAdd = true;
      this.productService.addProduct(this.product).subscribe(
        res => {
          this.formService.markAsPristine(this.form);
          if(res.statusCode = 201)
          {
           this.messageShared.setMessage(new MessageDTO(res['message'], this.toastService.typeToast.success, 'SUCCES'));
          }
          else{
            this.messageShared.setMessage(new MessageDTO(res['message'], this.toastService.typeToast.error, 'ERREUR'));
          }
          this.loadingAdd = false;
               
        },
        err => {
          this.messageShared.setMessage(new MessageDTO(err, this.toastService.typeToast.error, 'ERREUR'));
          this.loadingAdd = false;
        }
      );

    }
    else
    {
      this.showErrors = true;
      this.loadingAdd = false;
    }
    
  }

  getCategories(): void
  {
    this.productService.getProducts()
    .subscribe( res => {
          if (Array.isArray(res['records'])) {
            this.categories = res['records'];
            console.log(this.categories); 
          }     
    },
    err => {
 
    });

  }

}
