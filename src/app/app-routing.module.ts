import { GuestGuard } from './guest.guard';
import { AdminGuard } from './admin.guard';
import { ShipComponent } from './ship/ship.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'order', component: OrderComponent, canActivate: [AdminGuard] },
  { path: 'ship', component: ShipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
