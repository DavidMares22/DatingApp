import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseUrl = environment.apiUrl;
  //create the service
  constructor(private http: HttpClient) { }

  //create the getMembers
  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  //create the getMember
  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
 
}
