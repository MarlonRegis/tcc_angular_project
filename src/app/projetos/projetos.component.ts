import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state,
  group,
  query,
  animateChild,
  keyframes
} from '@angular/animations';

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
        style({ transform: 'translateY(-5%)'}),
        animate('1s 500ms ease-out', style({ transform: 'translateY(0)' }))])
  ])
]
})
export class ProjetosComponent implements OnInit {


  constructor() {
  }
    ngOnInit(): void {  }

}


