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

  async sendAuthData(url, data): Promise<User> {
    const { user } = await this.apiService.postWithoutToken(`auth/${url}`, data);

    if (!!user) {
      this.isAuthorizedSubject.next(true);
    }

    return this.user = user;
  }

  login(email: string, password: string): void {
    this.sendAuthData('signin', { email, password });
  }

  register(email: string, password: string, name: string): void {
    this.sendAuthData('signup', { email, password, name });
  }
}
