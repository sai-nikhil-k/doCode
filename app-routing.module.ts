import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OrderedItemComponent } from './ordered-item/ordered-item.component';

const routes: Routes = [
              {path:'',component:ProductsListComponent},
              {path:'signuP',component:SignUpComponent},
              {path:'home',component:ProductsListComponent},
              {path:'cart',component:AddToCartComponent},
              {path:'logIn',component:LoginComponent},
              {path:'orders',component:OrderedItemComponent}
            ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
