import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { LoginComponent } from './Login/Login.component';

const routes: Routes = [
  {path:"PhoneSystem",component:HomeComponent },
  {path:"Create",component:AddNewContactComponent},
  {path:"Login",component:LoginComponent},
  {path:'',redirectTo:'PhoneSystem',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
