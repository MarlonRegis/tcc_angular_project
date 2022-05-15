import { Entry } from 'contentful';
import { ContentfulService } from './../contentful.service';
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
        style({ transform: 'translateY(-5%)', opacity: 0}),
        animate('1s 500ms ease-out', style({ transform: 'translateY(0)', opacity: 1}))])
  ])
]
})
export class SobreComponent implements OnInit {

  sobre: Entry<any>|undefined;

  constructor(private contentfulService: ContentfulService) {

  }
    ngOnInit(): void {
      this.contentfulService.getFirstInformation('sobre')
        .then(sobre => this.sobre = sobre)
     }

}
