import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  id: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.users = []; 
    this.http.get('https://reqres.in/api/users').subscribe(res => {
      this.users = res["data"];
    });
  }
  
  getData(id){
    return this.http.get('https://reqres.in/api/users/'+id);
  } 
}
