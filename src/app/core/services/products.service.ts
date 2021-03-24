import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
    ) { }

  getAllProducts(){
    return this.http.get<Product[]>(environment.urlFirebase+'/productos_idx.json');
  }

  getProduct(id: any) {
    return this.http.get<Product>(`${environment.urlFirebase}/productos_idx/${id}.json`);
  }
}
