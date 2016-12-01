import {Component, Input, Output} from '@angular/core';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {

  @Input() users: Object;

  constructor(private userService: UserService) { }

  submitted = false;
  active = true;

  submitForm(nameInput: String, phoneInput: String) {
    this.userService.addUsers({ name: nameInput, phone: phoneInput });
  }

}
