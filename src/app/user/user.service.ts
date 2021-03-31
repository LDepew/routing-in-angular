import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "localhost:8080/api/users/";

  constructor(
    private http: HttpClient
    ) { }

    list (): Observable<User[]> {
      return this.http.get(`${this.baseurl}`) as Observable<User[]>;
          }
}
