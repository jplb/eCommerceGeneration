import { ActivatedRoute, Router } from '@angular/router';
import { VerProduto } from '../model/VerProduto';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import Swal from 'sweetalert2';//importado de https://sweetalert2.github.io/
import { VerProdutoService } from '../service/ver-produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})

export class VerProdutoComponent implements OnInit {
  verProduto: VerProduto = new VerProduto()
  public id: number
  public nome: string
  public tamanho: string
  public cor: string
  public foto: string
  public tema: string
  public estoque: number
  public preco: number
  public modelo: string
  public quantidade: number
  public subTotal: number
  pedido: VerProduto[]
  user: User = new User()
  idUser = environment.id


  findProdById(id: number) {
    this.verProdutoService.getByIdProduto(id).subscribe((resp: VerProduto) => {
      this.verProduto = resp
    })
  }

  ngOnInit() {
    window.scroll(0, 0)
    let id = this.aRoute.snapshot.params['id']
    this.findProdById(id)
    this.quantidade = 1
    this.subTotal = this.verProduto.preco
  }

  processo(valor: number) {
    valor += this.quantidade;
    if (valor < 1) {
      this.quantidade = 1;
    } else if (valor >= (this.verProduto.estoque - 1)) {
      this.quantidade = (this.verProduto.estoque - 1);
    } else {
      this.quantidade = valor;
    }
  }

  calculaSubTotal() {
    this.subTotal = this.verProduto.preco * this.quantidade
    return this.subTotal
  }

  addPedido() {
    if (environment.token == "") {
      Swal.fire({
        icon: 'error',
        title: 'Putz!',
        text: 'Faça login para comprar'
      })

      this.router.navigate(["/login"])
    } else {
      this.calculaSubTotal()
      this.pedido = JSON.parse(localStorage.getItem('pedido') || '[]')

      this.pedido.push(
        {
          id: this.verProduto.id,
          nome: this.verProduto.nome,
          foto: this.verProduto.foto,
          estoque: this.verProduto.estoque,
          preco: this.verProduto.preco,
          user: this.verProduto.user,
          quantidade: this.verProduto.quantidade,
          subTotal: this.verProduto.subTotal,
          tamanho: this.verProduto.tamanho,
          cor: this.verProduto.cor,
          tema: this.verProduto.tema,
          modelo: this.verProduto.modelo
        })
      localStorage.setItem('pedido', JSON.stringify(this.pedido))
      Swal.fire({
        icon: 'success',
        title: 'Parabéns!',
        text: 'O produto já consta no pedido!'
      })
      this.router.navigate(['/pedido'])
    }
  }

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private verProdutoService: VerProdutoService) { }
}