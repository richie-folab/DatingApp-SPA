import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }

login(model: any) {

  // Call the login endpoint by post passing the URL, use the pipe and map operators
  //  to receive the response and store in a local storage
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;

      if (user) {
        localStorage.setItem('token', user.token);
      }
    })
  );
}

}
