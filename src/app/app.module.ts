import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartComponent } from './component/chart/chart.component';
import { ChartZoomComponent } from './component/chart-zoom/chart-zoom.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartZoomComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
