import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';

// No need for a selector, never going to be nested
@Component({
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
   // This is the way we get route parameters
   constructor(private route: ActivatedRoute, private router: Router) {}

   pageTitle: string = 'Product Detail';
   product: Product;

   ngOnInit(): void {
      // Getting route parameter id, converting to int - +
      let id = +this.route.snapshot.paramMap.get('id');
      this.pageTitle += `: ${id}`;
      // Hard coding for POC
      this.product = {
         productId: id,
         productName: 'Test',
      };
   }

   // Routing from code (typescript)
   onBack(): void {
      this.router.navigate(['/products']);
   }
}
