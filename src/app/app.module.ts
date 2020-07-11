//Importing from Angular's library, BrowserModule is an ES module as well as Angular module
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//Importing from our own library, AppComponent is an ES module, just a component
//If importing - always an ES module, can be Angular module, component, pipe, etc
//Register external module here (eg. BrowserModule), use its features in declarations
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

//BrowserModule - always import for apps run on browser - ngIf, ngFor
//Declarations - components and pipes part of this Angular module
//bootstrap - first component to be executed, whatever is used in index.html
@NgModule({
   declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe],
   imports: [BrowserModule, FormsModule],
   bootstrap: [AppComponent],
})
export class AppModule {}
