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
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
//BrowserModule - always import for apps run on browser - ngIf, ngFor
//Declarations - components and pipes part of this Angular module
//bootstrap - first component to be executed, whatever is used in index.html
//Router Module - exposes Router Service which Angular uses to expose routes
//HttpClientModule - to make HTTP calls
@NgModule({
   declarations: [
      AppComponent,
      ProductListComponent,
      ConvertToSpacesPipe,
      StarComponent,
      WelcomeComponent,
      ProductDetailComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      // Exposes routes, matches routes to components/actions
      // product/:id - parameter passed to component
      // Default and wildcard routes to /welcome which maps to WelcomeComponent
      // pathMatch - use when we redirectTo
      RouterModule.forRoot([
         { path: 'products', component: ProductListComponent },
         { path: 'product/:id', component: ProductDetailComponent },
         { path: 'welcome', component: WelcomeComponent },
         { path: '', redirectTo: 'welcome', pathMatch: 'full' },
         { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      ]),
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
