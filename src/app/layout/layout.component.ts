import { ContentfulService } from './../contentful.service';
import { Component, OnInit } from '@angular/core';
import { Entry } from "contentful";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  layout: Entry<any> |undefined;

  constructor(private contentfulService: ContentfulService) {

  }
    ngOnInit(): void {
      this.contentfulService.getLayout()
        .then(layout => this.layout = layout)
     }
}
