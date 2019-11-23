export default interface Inventario {
  CodigoInventario: number;
  CodigoProducto: number;
  Fecha: Date;
  TipoRegistro: string;
  Precio: number;
  Entradas: number;
  Salidas: number;
}
