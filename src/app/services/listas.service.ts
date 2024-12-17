import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from '../model/Lista'

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  public urlAPI:string = "http://localhost:8080";

  constructor(private http: HttpClient) {

   }

   //Requisições para api backend

   public recuperarListas(): Observable<Lista[]>{
    return this.http.get<Lista[]>(this.urlAPI+"/listas");//Requisição para url do backend
   }
   
   public cadastrarLista(lista:Lista): Observable<Lista>{
    return this.http.post<Lista>(this.urlAPI+"/lista",lista);
  }

  //Requisição dos dados apartir do id
  public recuperarPorId(id: number): Observable<Lista>{
    return this.http.get<Lista>(this.urlAPI+"/listas/"+id);
  }

  public removerLista(id: number): Observable<any> {
    return this.http.delete(this.urlAPI + '/listas/' + id, { responseType: 'text' });
  }

}
