import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm!: FormGroup;
  user!: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.user.username = this.loginForm.value['username'];
    this.user.password = this.loginForm.value['password'];

    this.logIn(this.user);
  }

  logIn(user: User): void {
    this.userService.logIn(this.user).subscribe({
      complete: () => this.router.navigate(['/', 'recipes']),
      error: (err) => {
        console.log(err, 'Error');
      },
    });
  }

  cancel(): void {
    this.submitted = false;
    this.loginForm.reset();
  }

  get f() {
    return this.loginForm.controls;
  }
}
