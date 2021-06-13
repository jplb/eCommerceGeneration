import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public router: Router
  pesquisa: string
  constructor() { }

  ngOnInit(): void {
  }

  atualizaBusca(){
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() =>{
         this.router.navigate(["/pesquisa",this.pesquisa])
    })
}

}
