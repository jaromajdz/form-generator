import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignInUpData, ISignUpInResponse } from '../types/app.types';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { User } from './user.model';



@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private _userData!: User;

  private _user$ = new Subject<User | null>();
  private _loggedIn$ = new BehaviorSubject<boolean>(false);
  private _timer: any;

  constructor(private _httpClient: HttpClient) {}

  signIn(email: string, password: string) {
    const authBody: ISignInUpData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this._httpClient
      .post<ISignUpInResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          API_KEY,
        authBody
      )
      .pipe(
        tap((authResponse) => {
          this.authHandler(
            authResponse.email,
            authResponse.localId,
            authResponse.idToken,
            authResponse.refreshToken,
            +authResponse.expiresIn
          );
        })
      );
  }

  signUp(email: string, password: string) {
    const registerBody: ISignInUpData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this._httpClient
      .post<ISignUpInResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          API_KEY,
        registerBody
      )
      .pipe(
        tap((authResponse) => {
          this.authHandler(
            authResponse.email,
            authResponse.localId,
            authResponse.idToken,
            authResponse.refreshToken,
            +authResponse.expiresIn
          );
        })
      );
  }

  authHandler(
    email: string,
    id: string,
    token: string,
    refreshToken: string,
    expireIn: number
  ) {
    const expireDate = new Date(new Date().getTime() + expireIn * 1000);
    this._userData = new User(email, id, token, refreshToken, expireDate);
    this.loggedInUserData();
    this.autoLogout(expireIn * 1000);
    localStorage.setItem('userData', JSON.stringify(this._userData));
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      return;
    } else {
      const user: {
        email: string;
        id: string;
        _token: string;
        _refreshToken: string;
        _tokenExpireDate: Date;
      } = JSON.parse(userData);
      const loadedUser = new User(
        user.email,
        user.id,
        user._token,
        user._refreshToken,
        new Date(user._tokenExpireDate)
      );
      if (loadedUser.token) {
        const expirationTime =
          new Date(user._tokenExpireDate).getTime() - new Date().getTime();
        if (expirationTime > 0) {
          this.autoLogout(expirationTime);
          this.loggedInUserData();
        } else {
          localStorage.removeItem('userData');
        }
      }
    }
  }

  logOut() {
    this._user$.next(null);
    this._loggedIn$.next(false);
    localStorage.removeItem('userData');

    if (this._timer) {
      clearTimeout(this._timer);
    }
  }

  autoLogout(expireDuration: number) {
    this._timer = setTimeout(() => {
      this.logOut();
    }, expireDuration);
  }

  userData() {
    return this._user$;
  }

  loggedInUserData() {
    this._user$.next(this._userData);
    this._loggedIn$.next(true);
  }

  isLoggedIn() {
    return this._loggedIn$;
  }
}
