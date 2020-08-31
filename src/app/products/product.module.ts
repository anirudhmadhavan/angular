import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

// Feature module relating to products
@NgModule({
   declarations: [ProductListComponent, ProductDetailComponent],
   imports: [
      // For Child - does not register router service so that it is not repeated
      // product/:id - parameter passed to component
      RouterModule.forChild([
         { path: 'products', component: ProductListComponent },
         // Adding guard to prevent illegal ID access - use guards to authenticate route - think of it as action to take before going to route
         {
            path: 'product/:id',
            canActivate: [ProductDetailGuard],
            component: ProductDetailComponent,
         },
      ]),
      SharedModule,
   ],
})
export class ProductModule {}
