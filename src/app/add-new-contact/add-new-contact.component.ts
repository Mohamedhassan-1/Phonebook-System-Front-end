import { Component,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent {
  constructor(private httpClient:HttpClient){}
  ContactForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    phoneNumber:new FormControl(null,[Validators.required])
  });
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  showComponent:boolean=true;
   
  addNewContact(form:FormGroup)
  {
    console.log(form.value);
    this.httpClient.post("http://localhost:5138/api/Contact/Create",form.value,this.httpOptions).subscribe(
      response => {
        console.log(response); // Log the response from the server
        // Refresh the contacts list
        this.changeVisibility();
      },
      error => {
        console.error("There was an error adding the record!", error); // Log any errors
       // alert("Something went wrong while deleting the record.");
      }
    );
  }
  changeVisibility(){
    this.showComponent=!this.showComponent;
  }
}
