import { Component, Input, OnInit } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";
import { DepositoService } from "../services/deposito.service";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})

export class ExtratoComponent implements OnInit {
  @Input() transferencias: any[] = []; depositos: any[] = [];

  constructor(private transferencia: TransferenciaService, private deposito: DepositoService) {}

  ngOnInit(): void {
      this.transferencia.todas().subscribe((x) => (this.transferencias = x));
      this.deposito.todas().subscribe((x) => (this.depositos = x));
  }
}
