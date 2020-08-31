import { Injectable } from '@angular/core';
import {
   CanActivate,
   ActivatedRouteSnapshot,
   RouterStateSnapshot,
   UrlTree,
   Router,
} from '@angular/router';
import { Observable } from 'rxjs';

// Similar to a service so needs to be injected in root injector
@Injectable({
   providedIn: 'root',
})
// Implements CanActivate guard
export class ProductDetailGuard implements CanActivate {
   // This is to redirect to an error page accordingly
   constructor(private router: Router) {}
   // next - current router information
   // state - route state information
   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Can use next to obtain id - url[0] is /product and url[1] is id - refers to the nextUrl that we are planning to route to
      let id = +next.url[1].path;
      if (isNaN(id) || id < 1) {
         alert('Invalid Product ID');
         this.router.navigate(['/products']);
         return false;
      }
      return true;
   }
}
