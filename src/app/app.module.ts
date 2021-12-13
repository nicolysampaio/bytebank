import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { AcessarContaComponent } from './pagina-inicial/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './pagina-inicial/criar-conta/criar-conta.component';
import { ContaComponent } from './conta/conta.component';
import { NovoDepositoComponent } from './conta/novo-deposito/novo-deposito.component';
import { NovaTransferenciaComponent } from './conta/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './conta/extrato/extrato.component';

import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    AcessarContaComponent,
    CriarContaComponent,
    ContaComponent,
    NovoDepositoComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,[
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    ]
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
