import { Injectable } from '@angular/core';

import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private apiService: APIService
  ) { }

  async sendAuthData(url, data): Promise<any> {
    await this.apiService.postWithoutToken(`auth/${url}`, data);
  }

  login(email: string, password: string): void {
    this.sendAuthData('signin', { email, password });
  }

  register(email: string, password: string, name: string): void {
    this.sendAuthData('signup', { email, password, name });
  }
}
