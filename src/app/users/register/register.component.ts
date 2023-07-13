import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';
import { LocalizationService } from 'src/app/shared/services/localization.service';
import { helper } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user!: User;
  submitted: boolean = false;
  countries?: String[];
  regions?: String[];
  cities?: String[];

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private localService: LocalizationService
  ) {}

  ngOnInit(): void {
    this.countries = this.localService.getCountries();
    this.regions = this.localService.getRegions();
    this.cities = this.localService.getCities();

    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        country: ['', Validators.required],
        region: ['', Validators.required],
        city: ['', Validators.required],
      },
      {
        validators: helper.MustMatch('password', 'confirmPassword'),
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.user = Object.assign(this.user, this.registerForm.value);
    this.user.authorities = ['READ', 'EDIT', 'CREATE'];
    this.saveAndRedirect(this.user);
  }

  cancel(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

  saveAndRedirect(user: User): void {
    this.userService.saveUser(user).subscribe({
      complete: () => this.router.navigate(['/','recipes']),
      error: () => (this.submitted = false),
    });
  }

  get f() {
    return this.registerForm.controls;
  }
}
