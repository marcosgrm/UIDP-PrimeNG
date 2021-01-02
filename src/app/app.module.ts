import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {MenuModule} from 'primeng/menu';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    RatingModule,
    MenuModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
