import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { VerProdutoComponent } from './ver-produto/ver-produto.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DesignerComponent } from './designer/designer.component';
import { CategoriaComponent } from './categoria/categoria.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'ver-produto', component: VerProdutoComponent},
  { path: 'vitrine', component: VitrineComponent},
  { path: 'produto', component: ProdutoComponent },
  { path: 'home', component: HomeComponent },
  {path:'produto-edit/:id', component: ProdutoEditComponent},
  {path:'produto-delete/:id', component: ProdutoDeleteComponent},
  {path:'sobre-nos', component: SobreNosComponent},
  {path:'designer',component: DesignerComponent},
  {path:'categoria/:id', component: CategoriaComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
