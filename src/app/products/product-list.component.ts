import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
   //This is the directive which can be used as a HTML tag <pm-products> - displays template associated with current template
   selector: 'pm-products',
   //Linked template
   templateUrl: './product-list.component.html',
   //Linked CSS
   styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
   ngOnInit(): void {
      //Called before view is initialized as soon as component is created
      console.log('OnInit');

      // Using injected service to make HTTP calls - subsribing to the observable
      // Next fn - applied to every 'future' data in observable
      // Error fn - applied when observable returns error - catchError in product service wraps it up for us
      this.productService.getData().subscribe({
         next: (response) => {
            this.products = response;
            this.filteredProducts = this.products;
         },
         error: (err) => console.log(err),
      });
   }

   constructor(private productService: ProductService) {
      //Initially, all products are displayed without any filter
      this.filteredBy = '';
   }

   pageTitle: string = 'Product List';
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;

   //Backing variable for filteredBy getter and setter
   _filteredBy: string = '';
   products: Product[];
   filteredProducts: Product[];

   //This is used to maintain whether we show or hide image in ngIf field of img tag
   toggleImage(): void {
      this.showImage = !this.showImage;
   }

   //This is called by the Filtered By text field in template to display
   get filteredBy() {
      return this._filteredBy;
   }

   // This is called when user changes input and two way binding takes effect
   // This is called initially, when view is created
   // At that time, products will not be available, so need to have the initial check to disable filtering if filteredBy is empty
   set filteredBy(filteredBy: string) {
      this._filteredBy = filteredBy;
      //Setting it here so that it is displayed on template
      this.filteredProducts =
         this.filteredBy && this.filteredBy.trim().length > 0
            ? this.products.filter(
                 (product) =>
                    //Check if filteredBy exists anywhere is product name
                    product.productName
                       .toLocaleLowerCase()
                       .indexOf(filteredBy.toLocaleLowerCase()) !== -1
              )
            : this.products;
   }

   public childEvent(text: string) {
      console.log(text);
   }
}
