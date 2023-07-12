import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  user!: IUser;
  saving: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  registerUser(user: IUser): void {
    // TODO: condition on form valid ??
    // save User this.userService.saveUser()
    this.saving = true;
    this.saveAndRedirect(user);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  saveAndRedirect(user: IUser): void {
    this.userService.saveUser(user).subscribe({
      complete: () => this.router.navigate(['/recipes']),
      error: () => (this.saving = false),
    });
  }
}
