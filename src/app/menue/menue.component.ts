import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  loggedIn : boolean = false;
  user: any;

  constructor() { 
   
    this.user = firebase.auth().currentUser;
    if(this.user){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }

    firebase.auth().onAuthStateChanged((user) =>{

      if(user){
        this.loggedIn = true;
      }
      else{
        this.loggedIn = false;
      }


    })


  }

  ngOnInit(): void {
  }

  logout(){

    firebase.auth().signOut();
  }

}
