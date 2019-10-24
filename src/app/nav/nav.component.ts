import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // model will store username and password.  {} makes it an empty object
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    },
    error => {
      console.log (error);
    });
  }

  loggedIn() {

    // Read the token from localStorage
    const token = localStorage.getItem('token');

    // Returns true if the variable 'token' has a value and false if the variable is empty
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }


}
