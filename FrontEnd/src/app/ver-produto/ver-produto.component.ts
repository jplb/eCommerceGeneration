import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VerProduto } from '../model/VerProduto';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';

@Component({
  selector: 'app-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})

export class VerProdutoComponent implements OnInit {
  VerProduto: VerProduto = new VerProduto()
  public id: number
  public nome: string
  public tamanho: string
  public cor: string
  public foto: string
  public tema: string
  public estoque: number
  public preco: number
  public modelo: string
  user: User = new User()
  idUser = environment.id

  findProdById(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: VerProduto) => {
      this.VerProduto = resp
    })
  }

  ngOnInit() {
    window.scroll(0, 0)
    let id = this.aRoute.snapshot.params['id']
    this.findProdById(id)
  }

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private produtoService: ProdutoService){}
  }
