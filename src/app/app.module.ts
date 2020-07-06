//Importing from Angular's library, BrowserModule is an ES module as well as Angular module
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//Importing from our own library, AppComponent is just an ES module, just a component
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

//BrowserModule - always import for apps run on browser
//Declarations - components part of this Angular module
//bootstrap - first Component to be executed, whatever is used in index.html
@NgModule({
   declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe],
   imports: [BrowserModule, FormsModule],
   bootstrap: [AppComponent],
})
export class AppModule {}
