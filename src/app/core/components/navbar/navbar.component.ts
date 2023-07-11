import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'wb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
