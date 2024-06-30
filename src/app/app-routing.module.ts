import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { DetailProductsComponent } from './detail-products/detail-products.component';
const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'add-products', component: AddProductsComponent},
  {path: 'detail/:id', component: DetailProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
