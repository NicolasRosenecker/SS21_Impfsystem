import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import {catchError, retry} from 'rxjs/operators';
import { User } from '../shared/user';

// Spiegelt Token-Payload vom Server wieder
interface Token {
  exp: number;
  user: {
    id: string,
    firstname: string,
    lastname: string,
    social_security_number: string,
    email: string,
    vaccination_id: number,
    birthdate: Date,
    phone: string,
    gender: string,
    is_admin: boolean,
    is_vaccinated: boolean,
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
    const decodedToken = jwt_decode(token) as Token;
    localStorage.setItem('token', token);
    localStorage.setItem('id', decodedToken.user.id);
    localStorage.setItem('firstname', decodedToken.user.firstname);
    localStorage.setItem('lastname', decodedToken.user.lastname);
    localStorage.setItem('social_security_number', decodedToken.user.social_security_number);
    localStorage.setItem('email', decodedToken.user.email);
    localStorage.setItem('vaccination_id', String(decodedToken.user.vaccination_id));
    // @ts-ignore
    localStorage.setItem('birthdate', decodedToken.user.birthdate);
    localStorage.setItem('phone', decodedToken.user.phone);
    localStorage.setItem('gender', decodedToken.user.gender);
    if(decodedToken.user.is_admin){
      localStorage.setItem('is_admin', String(true));

    } else{
      localStorage.setItem('is_admin', String(false));
    }
    if(decodedToken.user.is_vaccinated){
      localStorage.setItem('is_vaccinated', String(true));

    } else{
      localStorage.setItem('is_vaccinated', String(false));
    }
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

  decodeToken(): User {
      const decodedToken = jwt_decode(<string> localStorage.getItem("token")) as Token;

      return new User(+decodedToken.user.id, decodedToken.user.firstname, decodedToken.user.lastname,
        decodedToken.user.social_security_number, decodedToken.user.email, decodedToken.user.vaccination_id, decodedToken.user.birthdate,
        decodedToken.user.phone, decodedToken.user.gender, decodedToken.user.is_admin, decodedToken.user.is_vaccinated);

    }

  getCurrentUser(): User {
    return this.decodeToken();
  }

  hasAvailableSlots(participants: number, maxParticipants: number){
    return participants < maxParticipants;
  }

  isAdmin() {
    return localStorage.getItem("is_admin") === "true";
  }

  isVaccinated() {
    return localStorage.getItem("is_vaccinated") === "true";
  }

  getFirstName() {
    return localStorage.getItem("firstname");
  }

  getLastName() {
    return localStorage.getItem("lastname");
  }



}
