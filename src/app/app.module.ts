import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import '../../src/app/shared/rxjs/rxjs-operator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { ProductAddComponent } from './component/product/product-add/product-add.component';
import { ProductEditComponent } from './component/product/product-edit/product-edit.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { CategoryListComponent } from './component/category/category-list/category-list.component';
import { LoaderComponent } from './component/loader/loader.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule, MessageShared } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    CategoryListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    MessageShared
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
