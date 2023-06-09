import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/guest_users/home/home.component';
import { AboutComponent } from './_components/guest_users/about/about.component';
import { ServicesComponent } from './_components/guest_users/services/services.component';
import { ContactComponent } from './_components/guest_users/contact/contact.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {
    path: 'guest',
    children: [
      {path: "", component:HomeComponent},
      {path:"about", component:AboutComponent},
      {path:"services", component:ServicesComponent},
      {path:"contact", component:ContactComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
