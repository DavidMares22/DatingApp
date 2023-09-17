import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import the http client service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  //create var to store users
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5000/api/users').subscribe({
      next: (response) => {
        console.log(response);
        this.users = response;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Finished');
      },
    });
  }

  constructor(private http: HttpClient) {}
}
