import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { APIService } from './api.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: firebase.User;
  private isAuthorizedSubject = new BehaviorSubject<boolean>(undefined);

  constructor(
    private apiService: APIService
  ) {
    const isAuthorized = !!localStorage.getItem('token');
    this.isAuthorizedSubject.next(isAuthorized);
    // sign in with token
  }

  isAuthorized(): Observable<boolean> {
    return this.isAuthorizedSubject.asObservable();
  }

  getUser(): firebase.User {
    return this.user;
  }

  async login(email: string, password: string): Promise<void> {
    const loginInfo = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(loginInfo);
  }

  async register(email: string, password: string, name: string): Promise<void> {
    const regInfo = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(regInfo);
    }

  logout() {
    localStorage.removeItem('token');
    this.isAuthorizedSubject.next(false);
  }
}
