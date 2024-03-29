import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userService = inject(UserService);

  ngOnInit(): void {
   console.log(this.userService.text);
  }

}
