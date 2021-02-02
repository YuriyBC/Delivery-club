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
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { FiltrationComponent } from './filtration/filtration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeliveryListComponent,
    DeliveryItemComponent,
    FiltrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
  ],
  providers: [ApiProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
