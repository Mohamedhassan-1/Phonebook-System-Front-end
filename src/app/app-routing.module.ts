import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from './navbar/navbar.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"PhoneSystem",component:Navbar },
  {path:"Create",component:AddNewContactComponent},
  {path:"Home",component:HomeComponent},
  {path:'',redirectTo:'Home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
