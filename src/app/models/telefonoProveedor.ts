import Proveedor from './proveedor';

export default interface TelefonoProveedor {
  codigoTelefono?: number;
  number: number;
  descripcion: string;
  codigoProveedor: number;
  proveedor?: Proveedor;
}
