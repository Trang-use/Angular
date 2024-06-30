import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from './products';
import { IproductsDetails } from '../detail-products/detail';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable <Iproducts[]> {
    return this.http.get<Iproducts[]>('http://localhost:3000/products');
  }

  getDetail_product(id: any) : Observable <any[]> {
    return this.http.get<IproductsDetails[]>(`http://localhost:3000/products/details/${id}`);
  }

  post_product(data: any): Observable<any>{
    return this.http.post<any[]>(`http://localhost:3000/products/add-propducts`,data);
  }

}
