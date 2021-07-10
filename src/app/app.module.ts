import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from
'@angular/common/http';
import firebase from 'firebase/app';
import 'firebase/auth';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MenueComponent } from './menue/menue.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';

var firebaseConfig = {
  apiKey: "AIzaSyBcjIfaY-VRH8aKw9V3P95Dahs_yQwVudE",
  authDomain: "scribe-292a0.firebaseapp.com",
  projectId: "scribe-292a0",
  storageBucket: "scribe-292a0.appspot.com",
  messagingSenderId: "329218197440",
  appId: "1:329218197440:web:d4905e7e270442fa676a25",
  measurementId: "G-KQG47X826P"
};

firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenueComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
