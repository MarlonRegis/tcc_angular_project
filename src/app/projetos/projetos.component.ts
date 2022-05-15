import { ContentfulService } from './../contentful.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Entry } from "contentful";


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
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
export class ProjetosComponent implements OnInit {

  public otherProjects: boolean = false;
  isFirst: boolean = false;

  showMore(): void{
  console.log("Clicado no botao de ver mais");
    this.otherProjects = true;
  }

  showLess(): void{
    console.log("Clicado no botao de ver menos");
    this.otherProjects = false;
  }

  projetos: Entry<any>[] = [];
  projeto: Entry<any> |undefined;

  constructor(private contentfulService: ContentfulService) {

  }
  ngOnInit(): void {
    this.contentfulService.getInformations('projetos')
      .then(projetos => {
        this.projeto = projetos[0];
        projetos.splice(0,1);
        this.projetos = projetos;
      });
  }



}


