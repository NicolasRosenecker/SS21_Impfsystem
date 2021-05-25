import { Injectable } from '@angular/core';
import { Location, Vaccination } from "./location";
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';


@Injectable()
export class ImpfsystemService {

  private api = 'http://impfsystem.s1810456030.student.kwmhgb.at/api';

  constructor(private http: HttpClient) { }

   getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.api}/locations`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(postal_code: string): Observable<Location> {
    return this.http.get<Location>(`${this.api}/locations/${postal_code}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  create(location: Location): Observable<any> {
    return this.http.post(`${this.api}/location`, location)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  update(location: Location): Observable<any> {
    return this.http.put(`${this.api}/location/${location.postal_code}`, location)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(postal_code: string): Observable<any> {
    return this.http.delete(`${this.api}/location/${postal_code}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  createVaccination(vaccination: Vaccination): Observable<any> {
    return this.http.post(`${this.api}/vaccination`, vaccination)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  updateVaccination(vaccination: Vaccination): Observable<any> {
    return this.http.put(`${this.api}/vaccination/${vaccination.id}`, vaccination)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}

