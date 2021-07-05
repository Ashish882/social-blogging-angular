import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public activateRoute : ActivatedRoute ) { 
    let id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(id);
  }

  ngOnInit(): void {
  }

}
