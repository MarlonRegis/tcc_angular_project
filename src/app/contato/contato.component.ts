import { Entry } from 'contentful';
import { ContentfulService } from './../contentful.service';
import {Router} from "@angular/router"
import { FormGroup } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  contato: Entry<any>|undefined;

  usuario: any = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }


  private api = "https://formspree.io/f/xrgjovrw";

  onSubmit(formulario: any ): void{
    this.http.post(this.api, formulario.value).subscribe(dados =>{
      window.alert("Formulário enviado, estaremos em breve entrando em contato!");
    },
    error =>{
      window.alert("Infelizmente ocorreu um erro no envio do seu formulário, pedimos que entre em contato através do nossos contatos!");
    })
  }

  constructor(private contentfulService: ContentfulService,
     private router: Router,
     private http: HttpClient) { }

  ngOnInit(): void {
    this.contentfulService.getContato()
        .then(contato => this.contato = contato)
     }

}
