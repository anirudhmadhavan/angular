import { Product } from './product';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

// Root level injector - available to all components
@Injectable({
   providedIn: 'root',
})
export class ProductService {
   // Declaring and injecting http client - shortcut
   constructor(private http: HttpClient) {}

   private url = 'api/products/products.json';

   // Using Http Client to make a call - returns Observable
   // Response is of type Product[] - use generics
   // Returned observable goes through tap and catchError - logging, error wrapping
   public getData(): Observable<Product[]> {
      return this.http.get<Product[]>(this.url).pipe(
         tap((data) => console.log(JSON.stringify(data))),
         catchError(this.handleError)
      );
   }

   // Wraps HTTP error with appropriate error message
   private handleError(err: HttpErrorResponse) {
      let errorMessage = '';

      if (err.error instanceof ErrorEvent) {
         errorMessage = `Client Error : ${err.error.message}`;
      } else {
         errorMessage = `Server Error : ${err.status}, ${err.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }
}
