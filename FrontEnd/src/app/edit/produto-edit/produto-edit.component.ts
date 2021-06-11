import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {


  produto: Produto = new Produto ()
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    if (environment.token =='') {
      alert('Sua sessão expirou! Faça login novamente')
      this.router.navigate(['/entrar'])
     }

     let id = this.route.snapshot.params['id']
     this.findByIdProduto(id)
  }


  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }

  atualizar(){
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=> {
      this.produto = resp
      alert('Tema atualizado!')
      this.router.navigate(['/tema'])
  })

  }
}
