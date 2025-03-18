import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
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

