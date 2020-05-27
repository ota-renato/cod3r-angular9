import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private _snackBar: MatSnackBar, private _http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product> {
    return this._http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  teste(): string {
    return 'oi teste';
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  read(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product> {
    const URL = `${this.baseUrl}/${id}`
    return this._http.get<Product>(URL)
  }

  update(product: Product): Observable<Product> {
    const URL = `${this.baseUrl}/${product.id}`
    return this._http.put<Product>(URL, product)
  }

  delete(id: number): Observable<Product> {
    const URL = `${this.baseUrl}/${id}`
    return this._http.delete<Product>(URL)
  }
}
