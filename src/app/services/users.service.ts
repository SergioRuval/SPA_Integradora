import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get('https://reqres.in/api/users');
  }

  getAllUsersSecond(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUser(id){
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
