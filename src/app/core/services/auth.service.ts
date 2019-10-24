import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { APIService } from './api.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private isAuthorizedSubject = new BehaviorSubject<boolean>(undefined);

  constructor(
    private apiService: APIService
  ) {
    const isAuthorized = !!localStorage.getItem('token');
    this.isAuthorizedSubject.next(isAuthorized);
  }

  isAuthorized(): Observable<boolean> {
    return this.isAuthorizedSubject.asObservable();
  }

  getUser(): User {
    return this.user;
  }

  async sendAuthData(url: string, data): Promise<User> {
    const { user } = await this.apiService.postWithoutToken(`auth/${url}`, data);

    if (!!user) {
      this.isAuthorizedSubject.next(true);
    }

    return this.user = user;
  }

  async login(email: string, password: string): Promise<void> {
    await this.sendAuthData('signin', { email, password });
  }

  async register(email: string, password: string, name: string): Promise<void> {
    await this.sendAuthData('signup', { email, password, name });
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logout');
    this.isAuthorizedSubject.next(false);
  }
}
