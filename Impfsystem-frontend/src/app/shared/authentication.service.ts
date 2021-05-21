import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { retry } from 'rxjs/operators';

// Spiegelt Token-Payload vom Server wieder
interface Token {
  exp: number;
  user: {
    id: string;
  };
}

@Injectable()

  export class AuthenticationService {

    private api = 'http://impfsystem.s1810456030.student.kwmhgb.at/api/auth';

    constructor(private http: HttpClient) { }

    login(email: string, password: string){
      return this.http.post(`${this.api}/login`, {
        email,
        password
      });
    }

    public setLocalStorage(token: string){
      console.log('Storing token');
      console.log(jwt_decode(token));
      const decodedToken = jwt_decode(token) as Token;
      console.log(decodedToken);
      console.log(decodedToken.user.id);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', decodedToken.user.id);
    }

    public getAdminStatus(){
      return sessionStorage.getItem('is_admin');
    }

    logout(){
      this.http.post(`${this.api}/logout`, {});
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      console.log('logged out');

    }

    public isLoggedIn(){
      if (localStorage.getItem('token')) {
        const token: string = localStorage.getItem('token') || '{}';
        console.log(token);
        console.log(jwt_decode(token));
        const decodedToken = jwt_decode(token) as Token;
        const expirationDate: Date = new Date(0);
        expirationDate.setUTCSeconds(decodedToken.exp);
        if (expirationDate < new Date()) {
          console.log('token expired');
          localStorage.removeItem('token');
          return false;
        }
        return true;
      } else {
        return false;
      }

    }

    public isLoggedOut(){
      return this.isLoggedIn();
    }
  }
