import { Observable } from 'rxjs';
import { VerProduto } from '../model/VerProduto';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getByIdProduto(id:number): Observable <VerProduto>{ //Busca produto por id
    return this.http.get<VerProduto>(`${environment.baseUrl}/produto/${id}`)
  }

  getByNameProduto(nome:string): Observable <VerProduto[]>{ //Busca produto por nome
    return this.http.get<VerProduto[]>(`${environment.baseUrl}/produto/nome/${nome}`)
  }

  getAllProduto(): Observable <VerProduto[]>{  //Busca todos os produtos
    return this.http.get<VerProduto[]>(`${environment.baseUrl}/produto`)
  }

  postProduto(produto:VerProduto):Observable<VerProduto>{
    return this.http.post<VerProduto>(`${environment.baseUrl}/produto`,produto,this.token)
  }

  putProduto(produto:VerProduto):Observable<VerProduto>{
    return this.http.put<VerProduto>(`${environment.baseUrl}/produto`,produto,this.token)
  }

  deleteProduto(id:number):Observable<VerProduto>{
    return this.http.delete<VerProduto>(`${environment.baseUrl}/produto/${id}`, this.token)
  }
}
