import { Observable } from 'rxjs';
import { VerProduto } from '../model/VerProduto';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  /* Início alterar Produto para VerProduto
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
} Fim alterar Produto para VerProduto*/
 
  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/produto', produto, this.token)
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/produto',  this.token)
  }


  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/${id}`, this.token)
  }


  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('http://localhost:8080/produto', produto, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`http://localhost:8080/produto/${id}`,this.token)
  }
}
