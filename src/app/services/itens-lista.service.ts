import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { itemLista } from '../model/ItemLista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensListaService {

  public urlAPI = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public adicionarNovoItem(item: itemLista): Observable<itemLista>{
    return this.http.post<itemLista>(this.urlAPI+"/itemlista",item)
  }

  public removerItem(idItem: number): Observable<any>{
    const url = this.urlAPI+"/itemlista/"+idItem
    return this.http.delete(url, { responseType: 'text' })
  }

  public alterarItem(item: itemLista): Observable<itemLista>{
    return this.http.put<itemLista>(this.urlAPI+"/itemlista/"+item.numSeq, item);
  }
}
