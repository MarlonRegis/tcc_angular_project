import { ContatoService } from './../contato.service';
import { FormGroup } from '@angular/forms';

import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
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
