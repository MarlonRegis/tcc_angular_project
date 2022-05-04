import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';
import {ContentfulService} from '../contentful.service'

@NgModule({
  declarations: [ProjetosComponent],
  imports: [
    ProjetosRoutingModule,
    CommonModule
  ],
  providers: [ContentfulService]
})
export class ProjetosModule { }
