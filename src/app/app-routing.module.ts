import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./component/product/product-list/product-list.component";
import {ProductAddComponent} from "./component/product/product-add/product-add.component";
import {ProductEditComponent} from "./component/product/product-edit/product-edit.component";

const routes: Routes = [
 
    { path: 'list', component: ProductListComponent},
    { path: 'add', component: ProductAddComponent},
    { path: 'edit/:id', component: ProductEditComponent},
    { path: 'view/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
