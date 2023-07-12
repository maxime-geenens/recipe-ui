import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  logIn(credentials: any): void {
    this.userService.logIn(credentials).subscribe({
      complete: () => this.router.navigate(['/recipes']),
      error: (err) => {
        console.log(err, 'Error');
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
