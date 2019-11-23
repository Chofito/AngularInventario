import Proveedor from "./Proveedor";

export default interface Compra {
  IdCompra: number;
  NumeroDocumento: number;
  CodigoProveedor: number;
  Fecha: Date;
  Total: number;
  Proveedor: Proveedor;
}
