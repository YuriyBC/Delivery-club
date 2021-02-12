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
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FiltrationComponent } from './filtration/filtration.component';
import { SortingPanelComponent } from './sorting-panel/sorting-panel.component';
import { DeliveryDetailsPage } from './delivery-details-page/delivery-details-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { AuthService } from './services/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeliveryListComponent,
    DeliveryItemComponent,
    FiltrationComponent,
    SortingPanelComponent,
    DeliveryDetailsPage,
    HomePageComponent,
    DeliveryInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [ApiProvider, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
