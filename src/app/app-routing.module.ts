import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./component/product/product-list/product-list.component";
import {ProductAddComponent} from "./component/product/product-add/product-add.component";
import {ProductEditComponent} from "./component/product/product-edit/product-edit.component";

const routes: Routes = [
  { path: 'listeProduit', 
  component: ProductListComponent },
  {
    path: 'productCreate',
    component: ProductAddComponent
  },
  {
    path: 'product/read_one',
    component: ProductEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
