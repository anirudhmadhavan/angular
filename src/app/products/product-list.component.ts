import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { FileDetector } from 'protractor';

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
   }

   constructor() {
      //Initially, all products are displayed without any filter
      this.filteredProducts = this.products;
      this.filteredBy = '';
   }

   pageTitle: string = 'Product List';
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;

   //Backing variable for filteredBy getter and setter
   _filteredBy: string = '';

   products: Product[] = [
      {
         productId: 1,
         productName: 'Leaf Rake',
         productCode: 'GDN-0011',
         releaseDate: 'March 19, 2019',
         description: 'Leaf rake with 48-inch wooden handle.',
         price: 19.95,
         starRating: 3.2,
         imageUrl: 'assets/images/leaf_rake.png',
      },
      {
         productId: 2,
         productName: 'Garden Cart',
         productCode: 'GDN-0023',
         releaseDate: 'March 18, 2019',
         description: '15 gallon capacity rolling garden cart',
         price: 32.99,
         starRating: 4.2,
         imageUrl: 'assets/images/garden_cart.png',
      },
      {
         productId: 5,
         productName: 'Hammer',
         productCode: 'TBX-0048',
         releaseDate: 'May 21, 2019',
         description: 'Curved claw steel hammer',
         price: 8.9,
         starRating: 4.8,
         imageUrl: 'assets/images/hammer.png',
      },
      {
         productId: 8,
         productName: 'Saw',
         productCode: 'TBX-0022',
         releaseDate: 'May 15, 2019',
         description: '15-inch steel blade hand saw',
         price: 11.55,
         starRating: 3.7,
         imageUrl: 'assets/images/saw.png',
      },
      {
         productId: 10,
         productName: 'Video Game Controller',
         productCode: 'GMG-0042',
         releaseDate: 'October 15, 2018',
         description: 'Standard two-button video game controller',
         price: 35.95,
         starRating: 4.6,
         imageUrl: 'assets/images/xbox-controller.png',
      },
   ];
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
}
