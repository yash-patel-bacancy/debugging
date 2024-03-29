import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular training';
  router = inject(Router);
  userService = inject(UserService);
  name = 'yash';
  arr: any;

  ngOnInit(): void {
    console.log(this.userService.text);
  }

  onAdd() {
    console.log("in add method");
    // this.router.navigate(['/login']);
    // this.arr.push("hello");
  }
}
