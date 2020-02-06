import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ComponentComponent } from './component/component.component';


@NgModule({
  declarations: [ComponentComponent],
  imports: [
    CommonModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }
