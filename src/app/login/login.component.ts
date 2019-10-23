import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async login(): Promise<void> {
    await this.authService.login(this.email, this.password);
    this.router.navigate(['/dashboard']);
  }

  async register(): Promise<void> {
    await this.authService.register(
      this.email,
      this.password,
      this.name
    );
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() { }
}
