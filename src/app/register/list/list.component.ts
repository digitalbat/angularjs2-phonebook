import { Component, OnInit, Input, Output } from '@angular/core';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  users: Object = [];

  constructor(private userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.users = this.userService.users;
  }

}
