export interface Transferencia {
  id?: string;
  valor: number;
  agencia: number | string;
  conta: number | string;
  data?: Date;
}
