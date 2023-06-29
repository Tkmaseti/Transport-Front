import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { HomeComponent } from './_components/guest_users/home/home.component';
import { AboutComponent } from './_components/guest_users/about/about.component';
import { ServicesComponent } from './_components/guest_users/services/services.component';
import { ContactComponent } from './_components/guest_users/contact/contact.component';
import { LoginComponent } from './_components/auth/login/login.component';
import { RegisterComponent } from './_components/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
