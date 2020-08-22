import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Example App';
  exampleData;
  userData;
  user: any = {};

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getUsers();
  }

  getData() {
    this.homeService.getBooks()
      .subscribe(data => {
        console.log(data);
        this.exampleData = data;
      });
  }

  register() {
    if(!this.user.name || !this.user.email || !this.user.password) return;

    this.homeService.register(this.user)
      .subscribe(data => {
        console.log(data);
        this.user = {};
        this.getUsers();
      });
  }

  getUsers() {
    this.homeService.getUsers()
      .subscribe(data => {
        console.log(data);
        this.userData = data;
      });
  }
}
