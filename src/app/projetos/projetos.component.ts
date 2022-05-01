import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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

  showMore(): void{
  console.log("Clicado no botao de ver mais");
    this.otherProjects = true;
  }

  showLess(): void{
    console.log("Clicado no botao de ver menos");
    this.otherProjects = false;
  }

  constructor() {

  }
    ngOnInit(): void {  }

}


