import { ContatoService } from './../contato.service';
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
        style({ transform: 'translateY(-5%)'}),
        animate('1s 500ms ease-out', style({ transform: 'translateY(0)' }))])
  ])
]
})
export class ContatoComponent implements OnInit {

  private api = "https://formsubmit.co/milenacast.arqsite@gmail.com"

  usuario: any = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }

  onSubmit(formulario: any ): void{
    console.log(formulario);

    this.contact.PostMessage(formulario.value);
  }
  constructor(private contact: ContatoService) { }


  ngOnInit(): void {
  }

}
