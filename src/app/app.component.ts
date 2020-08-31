//Importing an ES module from Angular's library
import { Component } from '@angular/core';
//Decorator
@Component({
   //Directive which can be used in html, custom HTML tags
   selector: 'pm-root',
   //Inline template
   // {{}} - data binding, using properties from .ts file in .html
   // Using routing to display welcome and products component - no need for selector in those two
   // routerLink - array - route and route parameters
   // /welcome is the route, /products is another route
   // routerOutlet is where the routed component's view is being displayed
   template: `
      <nav class="navbar navbar-expand navbar-light bg-light">
         <a class="navbar-brand">{{ pageTitle }}</a>
         <ul class="nav nav-pills">
            <li>
               <a class="nav-link" routerLinkActive="active" [routerLink]="['/welcome']">Home</a>
            </li>
            <li>
               <a class="nav-link" routerLinkActive="active" [routerLink]="['/products']"
                  >Product List</a
               >
            </li>
         </ul>
      </nav>
      <div class="container">
         <router-outlet></router-outlet>
      </div>
   `,
})

//Class - properties and logic
export class AppComponent {
   pageTitle: string = 'Acme Product Management';
}
