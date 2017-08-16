import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {SigninComponent} from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import {PageSliderModule} from 'ng2-page-slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FrameComponent } from './components/slider/frame/frame.component';
import { PictureGridComponent } from './picture-grid/picture-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    FrameComponent,
    PictureGridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PageSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
