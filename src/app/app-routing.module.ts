import { ExtratoComponent } from './conta/extrato/extrato.component';
import { NovoDepositoComponent } from './conta/novo-deposito/novo-deposito.component';
import { ContaComponent } from './conta/conta.component';
import { CriarContaComponent } from './pagina-inicial/criar-conta/criar-conta.component';
import { AcessarContaComponent } from './pagina-inicial/acessar-conta/acessar-conta.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaTransferenciaComponent } from './conta/nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  { path: '', redirectTo: 'pagina-inicial', pathMatch: 'full'},
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'pagina-inicial/acessar-conta', component: AcessarContaComponent },
  { path: 'pagina-inicial/criar-conta', component: CriarContaComponent },
  { path: 'conta', component: ContaComponent },
  { path: 'conta/nova-transferencia', component: NovaTransferenciaComponent },
  { path: 'conta/novo-deposito', component: NovoDepositoComponent },
  { path: 'conta/extrato', component: ExtratoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
