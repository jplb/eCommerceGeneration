import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { VerProduto } from '../model/VerProduto';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { VerProdutoService } from '../service/ver-produto.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})

export class VitrineComponent implements OnInit {

  produto: VerProduto = new VerProduto();
  listaProdutos: VerProduto[];

  user: User = new User();
  idUsuario = environment.id;

  constructor(
    private router: Router,
    private verProdutoService: VerProdutoService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.findAllProdutos();
  }

  findAllProdutos() {
    this.verProdutoService.getAllProduto().subscribe((resp: VerProduto[])=>{
      this.listaProdutos = resp;
    });
  }

}
