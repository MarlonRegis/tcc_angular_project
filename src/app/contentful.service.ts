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

  getProjetos(query?: object): Promise<Entry<any>[]>{
    return this.client.getEntries(Object.assign({
      content_type: 'projetos'
    }, query))
      .then(res=> res.items);
  }

  getProjeto(projetoId: any): Promise<Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type: 'projetos'
    }, {'sys.id': projetoId}))
      .then(res=> res.items[0]);
  }

  getHome(query?: object): Promise<Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type: 'backgroundHome'
    }, query))
      .then(res=> res.items[0]);
  }

  getLayout(query?: object): Promise<Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type: 'layout'
    }, query))
      .then(res=> res.items[0]);
  }

  getContato(query?: object): Promise<Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type: 'contato'
    }, query))
      .then(res=> res.items[0]);
  }

  getSobre(query?: object): Promise<Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type: 'sobre'
    }, query))
      .then(res=> res.items[0]);
  }

  constructor() { }
}
