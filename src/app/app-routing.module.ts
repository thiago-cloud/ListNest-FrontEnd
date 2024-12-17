import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from './components/listas/listas.component';
import { DetalheListaComponent } from './components/detalhe-lista/detalhe-lista.component';

const routes: Routes = [
  {path: '', component: ListasComponent},
  {path: 'detalhe/:id', component: DetalheListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
