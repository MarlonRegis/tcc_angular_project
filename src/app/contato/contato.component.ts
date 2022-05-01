import { Router, Routes } from '@angular/router';
import { ContatoService } from './contato.service';

import { FormGroup } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),

      transition('* => *', [
        style({ transform: 'translateY(-5%)', opacity: 0}),
        animate('1s 500ms ease-out', style({ transform: 'translateY(0)', opacity: 1}))])
  ])
]
})
export class ContatoComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }
  Routes: any;

  onSubmit(formulario: any ): void{
    console.log(formulario.value);

    this.Routes.navigate(this.contact.PostMessage(formulario.value));
  }
  constructor(private contact: ContatoService) { }
  ngOnInit(): void {
  }

}
