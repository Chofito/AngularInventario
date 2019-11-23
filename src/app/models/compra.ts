import Proveedor from './proveedor';

export default interface Compra {
  CodigoCompra: number;
  NumeroDocumento: number;
  CodigoProveedor: number;
  Fecha: Date;
  Total: number;
  Proveedor: Proveedor;
}
