import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ProdutoComponent } from './produto/produto.component';

=======
import { HomeComponent } from './home/home.component';
>>>>>>> 50ec84bc4ded69cb14ce5475b2055fa2d37c6231

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
<<<<<<< HEAD
    ProdutoComponent
=======
    HomeComponent
>>>>>>> 50ec84bc4ded69cb14ce5475b2055fa2d37c6231
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
