import { Component, OnInit } from '@angular/core';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  name?: string;

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.email, this.password);
  }

  register(): void {
    this.authService.register(
      this.email,
      this.password,
      this.name
    );
  }

  ngOnInit() { }
}
