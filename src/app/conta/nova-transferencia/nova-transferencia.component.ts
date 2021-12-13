import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  agencia: number = 0;
  conta: number = 0;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = { valor: this.valor, agencia: this.agencia, conta: this.conta };
    this.aoTransferir.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      alert("Transferência realizada!");
      this.router.navigateByUrl('conta/extrato');
    },
    error => console.error(error));
  }

  limparCampos(){
    this.valor = 0;
    this.agencia = 0;
    this.conta = 0;
  }
}
