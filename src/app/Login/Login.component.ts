import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})

export class LoginComponent {
  isVisible:boolean=true;
  isModalOpen: boolean = false;
  Email:string='';
  password:string='';
  openForm(): void {
    this.isModalOpen = true;
  }
  changeVisibilty(): void {
    this.isVisible = false;
  }
  closeForm(): void {
    this.isModalOpen = false;
  }
}

