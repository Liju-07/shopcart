import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

const appRoute:Routes=[
  {
    path:"",component:MenComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"reg",component:RegisterComponent
  },
  {
    path:"men",component:MenComponent
  },
  {
    path:"women",component:WomenComponent
  },
  {
    path:"kid",component:KidsComponent
  },
  {
    path:"order",component:OrderComponent
  },
  {
    path:"cart",component:CartComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
