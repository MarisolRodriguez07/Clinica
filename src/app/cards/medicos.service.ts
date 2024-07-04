import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './medicos';

@Injectable({providedIn: 'root'})
export class MedicosService {
  filter(_arg0: (product: Producto) => any): any {
    throw new Error('Method not implemented.');
  }
  getAllMedicos() {
    throw new Error('Method not implemented.');
  }
  private readonly _http= inject(HttpClient);
  urlBase: any;

  getAllProducts():any{
    return this._http.get('https://sistemadeventas.com.ar/api/productos');
  }

  getPrductsByCategoryId(id: string): Observable<any>{
    return this._http.get<any>(`${this.urlBase}/productos?linkTo=categoria_id&equalTo=${id}`)
  }
}
