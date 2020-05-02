import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';

import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule {

}
