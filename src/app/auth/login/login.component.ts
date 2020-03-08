import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: firebase.User;

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    this._loginService.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
      });    
  }

  loginGoogle() {
    console.log('Login...');
    this._loginService.login(); 
  }

  loginFacebook() {
    console.log('Login...');
    this._loginService.fbLogin(); 
  }
  
  logout() {
    this._loginService.logout();
  }

}
