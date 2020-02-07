import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ComponentComponent } from './component/component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

@NgModule({
  declarations: [ComponentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ApiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ComponentComponent],
})
export class ApiModule { }
