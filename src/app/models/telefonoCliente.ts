import Cliente from './cliente';

export default interface TelefonoCliente {
  codigoTelefono?: number;
  number: number;
  descripcion: string;
  nit: string;
  cliente?: Cliente;
}
