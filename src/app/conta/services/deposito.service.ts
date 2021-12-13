import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deposito } from '../models/deposito.model';

@Injectable({
  providedIn: 'root',
})
export class DepositoService {
  private listaDeposito: any[];
  private url = 'http://localhost:3000/depositos/';

  constructor(private httpClient: HttpClient) {
    this.listaDeposito = [];
  }

  get depositos() {
    return this.listaDeposito;
  }

  todas(): Observable<Deposito[]> {
    return this.httpClient.get<Deposito[]>(this.url);
  }

  adicionar(deposito: Deposito):
  Observable<Deposito> {
    this.hidratar(deposito);

    return this.httpClient.post<Deposito>(this.url, deposito);
  }

  private hidratar(deposito: Deposito) {
    deposito.data = new Date();
  }
}
