import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto() 
  listaProdutos: Produto[]

  constructor(


    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    if (environment.token =='') {
      alert('Sua sessão expirou! Faça login novamente')
      this.router.navigate(['/entrar'])
     }
     this.findAllProdutos()
 }

 findAllProdutos(){
  this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
    this.listaProdutos = resp
  })
 }

 cadastrar(){
  this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
    this.produto = resp
    alert('Produto cadastrado com sucesso!')
    this.findAllProdutos()
    this.produto = new Produto() 
  })

 }




  }


