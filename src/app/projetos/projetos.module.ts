import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';

@NgModule({
  declarations: [ProjetosComponent],
  imports: [
    ProjetosRoutingModule,
    CommonModule
  ]
})
export class ProjetosModule { }
