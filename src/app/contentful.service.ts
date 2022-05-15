import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  getInformations(TypeofContent: any, query?: Object): Promise<Entry<any>[]>{
    return this.client.getEntries(Object.assign({
      content_type: TypeofContent
    }, query))
      .then(res=> res.items);
  }

  getFirstInformation(ContentType: any, query?: any): Promise<Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type: ContentType
    }, query))
      .then(res=> res.items[0]);
  }
  constructor() { }
}
