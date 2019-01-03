import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatSelectModule, MatTableModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SignalRService } from './services/signal-r.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { HumidityComponent } from './components/humidity/humidity.component';
import { PressureComponent } from './components/pressure/pressure.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    TemperatureComponent,
    HumidityComponent,
    PressureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule,
    MatMenuModule, MatCardModule,
    MatSelectModule, BrowserAnimationsModule,
    MatTableModule, NgxGaugeModule
  ],
  providers: [
    SignalRService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
