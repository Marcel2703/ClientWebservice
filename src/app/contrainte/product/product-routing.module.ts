import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductEditComponent } from 'src/app/component/product/product-edit/product-edit.component';
import { ProductAddComponent } from 'src/app/component/product/product-add/product-add.component';
import { ProductListComponent } from 'src/app/component/product/product-list/product-list.component';


const routes: Routes = [
  { path: '', component: ProductListComponent, children: [
    { path: '', redirectTo: 'list'},
    { path: 'list', component: ProductListComponent},
    { path: 'add', component: ProductAddComponent},
    { path: 'edit/:id', component: ProductEditComponent},
    { path: 'view/:id', component: ProductEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
