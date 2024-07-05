export interface Product {
  categoria_id: number;
  created_at: Date;
  disponible: number;
  id_producto: number;
  imagen_producto: string;
  nombre_producto: string;
  precio_producto: number;
  updated_at: Date;
}

export interface ProducsArray{
    results: Product[];
}
