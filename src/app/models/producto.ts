export default interface Producto {
  CodigoProducto: number;
  CodigoCategoria: number;
  CodigoEmpaque: number;
  Descripcion: string;
  PrecioUnitario: number;
  PrecioPorDocena: number;
  PrecioPorMayor: number;
  Existencias: number;
  Imagen: string;
}
