import { SobreComponent } from './sobre.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';


@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule,
    SobreRoutingModule
  ]
})
export class SobreModule { }
