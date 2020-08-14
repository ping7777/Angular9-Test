import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
  id: any;
  users: any;
  data: any;
  ad: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private UserComponent: UserComponent
  ) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.getData();
    this.getAd();
  }
  getData(){
    this.UserComponent.getData(this.id).subscribe(data => 
      {
        this.data = data["data"];
      })
  }
  getAd(){
    this.UserComponent.getData(this.id).subscribe(ad => 
    {
      this.ad = ad["ad"];
    })
  }
}
