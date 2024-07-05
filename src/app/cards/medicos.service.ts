import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './medicos';
import { ProducsArray } from '../intefaces/productos';

@Injectable({providedIn: 'root'})
export class MedicosService {

  filter(_arg0: (product: Producto) => any): any {
    throw new Error('Method not implemented.');
  }
  getAllMedicos() {
    throw new Error('Method not implemented.');
  }
  private readonly _http= inject(HttpClient);
  urlBase = "https://sistemadeventas.com.ar/api";

  getAllProducts():Observable<ProducsArray>{
    return this._http.get<ProducsArray>('https://sistemadeventas.com.ar/api/productos');
  }

  getPrductsByCategoryId(id: string):Observable<ProducsArray>{
    return this._http.get<ProducsArray>(`${this.urlBase}/productos?linkTo=categoria_id&equalTo=${id}`)
 }
}
