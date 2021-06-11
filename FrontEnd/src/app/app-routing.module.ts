import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'home', component: HomeComponent },


{path:'produto-edit/:id', component: ProdutoEditComponent},
{path:'produto-delete/:id', component: ProdutoDeleteComponent},

{path:'produto-edit/:tema', component: ProdutoEditComponent},
{path:'produto-delete/:tema', component: ProdutoDeleteComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
