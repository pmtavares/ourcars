import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'car-list', component: CarListComponent, canActivate: [OktaAuthGuard]},
  {path: 'car-add', component: CarEditComponent},
  {path: 'car-edit/:id', component: CarEditComponent},
  {path: 'implicit/callback', component: OktaCallbackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
