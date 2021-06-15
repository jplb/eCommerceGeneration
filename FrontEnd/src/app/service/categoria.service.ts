import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( 
    private http: HttpClient,
    public router : Router,
    public route: ActivatedRoute
    ) { }


   
  

  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categoria/${id}`)
  }

  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categoria')
  }

  getByTemaCategoria(temaCategoria: String): Observable<Categoria>{
    return this.http.get<Categoria>('http://localhost:8080/categoria/tema')
}


}
