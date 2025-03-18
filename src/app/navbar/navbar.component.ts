import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
interface Contact {
  name: string;
  phoneNumber: string;
  email: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar  {
  ContactsList:any;
  searchKeyword:string='';
  showComponent:boolean=true;
  @Input() email:string="Admin@site.com";
  searchType:string='';
  constructor(private httpClient:HttpClient)
  {
    this.ContactsList=[]
    this.getContacts();
  }
  changeVisibility(){
    this.showComponent=!this.showComponent;
  }
  getContacts()
  {
    this.httpClient.get("http://localhost:5138/api/Contact").subscribe((result:any)=>{
      this.ContactsList=result;
    })
  }
  filterContacts() {
    
    if (!this.searchKeyword) {
     this.getContacts();
    } else {
      // Filter contacts based on the search keyword
      if (this.searchType=="Name"){
      this.ContactsList = this.ContactsList.filter((contact: Contact) =>
      contact.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
    else  if (this.searchType=="Email"){
      this.ContactsList = this.ContactsList.filter((contact: Contact) =>
      contact.email.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
    else  if (this.searchType=="Phone"){
      this.ContactsList = this.ContactsList.filter((contact: Contact) =>
      contact.phoneNumber.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
    }
  }
  
  private apiUrl = 'http://localhost:5138/api/Contact'; // Replace with your API URL
  changeKeySearch(newValue: string): void {
    this.searchType = newValue; // Update the variable based on the button clicked
    console.log(this.searchType);
  }
  deleteRecord(id: number) {
    //console.log(id);
    if (confirm("Are you sure you want to delete this record?")) {
      this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe(
        response => {
          //console.log(response); // Log the response from the server
          this.getContacts(); // Refresh the contacts list
        },
        error => {
          console.error("There was an error deleting the record!", error); // Log any errors
         // alert("Something went wrong while deleting the record.");
        }
      );
    }
  }
}
