import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { DndModule } from 'ng2-dnd';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgxPaginationModule } from 'ngx-pagination';
// import { NgPipesModule } from 'ngx-pipes';

import { LoaderModule } from '../component/loader/loader.module';
import { BreadcrumbsService,MessageShared } from './subjects';
import {
  FormUtilsService,
  FilterUtilsService,
  SortDateFormatterService,
  ToastService,
  SlugifierService
} from './service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ToastyModule.forRoot(),
    DndModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    // NgPipesModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    ToastyModule,
    DndModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    // NgPipesModule
  ],
  declarations: [],
  providers: [
    ToastService,
    FormUtilsService,
    BreadcrumbsService,
    SortDateFormatterService,
    FilterUtilsService,
    SlugifierService
  ]
})
export class SharedModule {
}
