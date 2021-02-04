import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DeliveryDetailsPage } from './delivery-details-page/delivery-details-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: DeliveryDetailsPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
