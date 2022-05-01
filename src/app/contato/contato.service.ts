import { Router, NavigationStart } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private api = "https://formsubmit.co/milenacast.arqsite@gmail.com"

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    console.log(input);
    return this.http.post(this.api, input,
    {responseType: 'text'}).subscribe(dados =>{
      console.log(dados)
    })
  }
}
