import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import{ MatButtonModule} from "@angular/material/button";
import { SliderComponent } from './components/slider/slider.component';
import { SliderModule } from 'angular-image-slider';
import { MatFormFieldModule} from "@angular/material/form-field";
import { SliderMoviesComponent } from './components/slider-movies/slider-movies.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    SliderMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    SliderModule,
    MatFormFieldModule,
    IvyCarouselModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
