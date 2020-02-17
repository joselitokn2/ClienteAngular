import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Producto } from "../model/producto";
import { ProductoDTO } from "../model/productoDTO";

@Injectable({
  providedIn: "root"
})
export class ProductoService {
  constructor(private http: HttpClient) {}
  private baseUrl = "http://localhost:9000/producto";

  getProducto(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  buscarProductoNombre(nombre: string): Observable<any> {
    let params = new HttpParams();
    if (nombre !== null && typeof nombre !== undefined && nombre !== "") {
      params = params.append("nombre", nombre);
    }
    return this.http.get(`${this.baseUrl}?${params}`);
  }

  createProducto(producto: Producto): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, producto);
  }

  updateProducto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getProductosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
