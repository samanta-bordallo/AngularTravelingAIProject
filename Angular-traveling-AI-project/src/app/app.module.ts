import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { RouterModule } from '@angular/router';
import { ThirdScreenComponent } from './third-screen/third-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    SecondScreenComponent,
    FirstScreenComponent,
    ThirdScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
