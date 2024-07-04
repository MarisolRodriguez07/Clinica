export interface Producto {
  results: ApiResponse[];
  id_producto: number;
  nombre_producto: string;
  imagen_producto: string;
  disponible: number;
  precio_producto: number;
  categoria_id: number;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse {
  categoria_id: any;
  status: number;
  total: number;
  results: Producto[];
}

