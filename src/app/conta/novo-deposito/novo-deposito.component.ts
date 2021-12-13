import { Router } from '@angular/router';
import { DepositoService } from '../services/deposito.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Deposito } from '../models/deposito.model';

@Component({
  selector: 'app-novo-deposito',
  templateUrl: './novo-deposito.component.html',
  styleUrls: ['./novo-deposito.component.scss']
})
export class NovoDepositoComponent {
  @Output() aoDepositar = new EventEmitter<any>();

  valor: number = 0;

  constructor(private service: DepositoService, private router: Router) {}

  depositar() {
    console.log('Solicitado novo depósito');
    const valorEmitir = { valor: this.valor};
    this.aoDepositar.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      alert("Depósito realizado!");
      this.router.navigateByUrl('conta/extrato');
    },
    error => console.error(error));
  }

  limparCampos(){
    this.valor = 0;
  }
}
