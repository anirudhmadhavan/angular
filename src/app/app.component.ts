//Importing an ES module from Angular's library
import { Component } from "@angular/core";
//Decorator
@Component({
  //Directive which can be used in html, custom HTML tags
  selector : 'pm-root',
  //Inline template
  // {{}} - data binding, using properties from .ts file in .html
  template : `<div><h1>{{pageTitle}}</h1>
  <div>My First Component</div>
  <pm-products></pm-products>
  </div>`
})

//Class - properties and logic
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}