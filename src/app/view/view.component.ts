import { Component, OnInit,NgZone } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post : any = {};
  postId: string = "";

  constructor(public activeRoute: ActivatedRoute, public ngZone: NgZone) {
    let postparam = this.activeRoute.snapshot.paramMap.get("postId");
    this.postId = postparam!;

    firebase.firestore().collection("posts").doc(this.postId).get()
    .then((docSnapshot) => {
      this.ngZone.run(()=>{
        this.post = docSnapshot.data();
        console.log(this.post);
      })

    });


   }

  ngOnInit(): void {
  }

}
