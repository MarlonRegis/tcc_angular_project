import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private api = "https://formsubmit.co/milenacast.arqsite@gmail.com"

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    console.log(input);
    return this.http.post("https://formsubmit.co/milenacast.arqsite@gmail.com", input)
    .subscribe(dados =>console.log(dados))
  }

}
