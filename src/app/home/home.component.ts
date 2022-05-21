import { Entry } from 'contentful';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './../contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  background: Entry<any> | undefined;
  private styleElement: HTMLStyleElement | undefined;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getFirstInformation('backgroundHome')
      .then(background => {
        this.background = background;
        this.addSlide(background);
      });
   }

   addSlide (background:any): void{
    this.styleElement = document.createElement( "style" );
    this.styleElement.type = "text/css";
    this.styleElement.textContent =
      `
        @keyframes animate {
       0%,
       100% {
            background-image: url("${ background.fields.primeiraImagemSlide.fields.file.url }");
       }
       25% {
          background-image: url("${ background.fields.segundaImagemSlide.fields.file.url }");
       }
        50% {
          background-image: url("${ background.fields.terceiraImagemSlide.fields.file.url }");
       }
       75% {
          background-image: url("${ background.fields.quartaImagemSlide.fields.file.url }");
       }
      `;
      document.head.appendChild(this.styleElement);
   }
}
