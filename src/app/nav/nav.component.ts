import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // model will store username and password.  {} makes it an empty object
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    },
    error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {

    // // Read the token from localStorage
    // const token = localStorage.getItem('token');

    // // Returns true if the variable 'token' has a value and false if the variable is empty
    // return !!token;

    return this.authService.loggedIn();
    // console.log('Logged In: ' + this.authService.loggedIn());
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }


}
