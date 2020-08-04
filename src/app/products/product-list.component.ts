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
      this.products = this.productService.getData();
      this.filteredProducts = this.products;
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

   //This is called when user changes input and two way binding takes effect
   set filteredBy(filteredBy: string) {
      this._filteredBy = this.filteredBy;
      //Setting it here so that it is displayed on template
      this.filteredProducts = this.products.filter(
         (product) =>
            //Check if filteredBy exists anywhere is product name
            product.productName.toLocaleLowerCase().indexOf(filteredBy.toLocaleLowerCase()) !== -1
      );
   }

   public childEvent(text: string) {
      console.log(text);
   }
}
