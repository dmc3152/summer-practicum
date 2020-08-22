import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getBooks() {
    const url = 'http://localhost:3000/api/books';
    return this.http.get(url);
  }

  register(user) {
    const url = 'http://localhost:3000/api/users';
    return this.http.post(url, user);
  }

  getUsers() {
    const url = 'http://localhost:3000/api/users';
    return this.http.get(url);
  }
}
