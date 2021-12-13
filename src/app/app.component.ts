import { DepositoService } from "./conta/services/deposito.service";
import { TransferenciaService } from "./conta/services/transferencia.service";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  constructor(private transferencia: TransferenciaService, private deposito: DepositoService) {}
}
