import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
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
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
