import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { ApiProvider } from './services/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeliveryItemComponent } from './delivery-item/delivery-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeliveryListComponent,
    DeliveryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [ApiProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
