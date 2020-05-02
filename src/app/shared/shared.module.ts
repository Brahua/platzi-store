import { GroupProductsPipe } from './pipes/group-products/group-products.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    GroupProductsPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
  ],
  exports: [
    ExponentialPipe,
    GroupProductsPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
