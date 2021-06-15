import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://hw-tshirts.herokuapp.com/produto', produto, this.token)
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://hw-tshirts.herokuapp.com/produto',  this.token)
  }


  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://hw-tshirts.herokuapp.com/produto/${id}`, this.token)
  }


  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://hw-tshirts.herokuapp.com/produto', produto, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`https://hw-tshirts.herokuapp.com/produto/${id}`,this.token)
  }
}
