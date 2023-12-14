import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignInUpData, ISignUpInResponse  } from '../types/app.types';
import { Subject, tap } from 'rxjs';
import { User } from './user.model';

const API_KEY = 'AIzaSyBLgMaypwbtdnxYclS_B_Pu5tPCvH_r57M'

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private _userData!: User

  private _user$ = new Subject<User>()

  constructor(private _httpClient: HttpClient) { 
    
  }

  signIn(email: string, password: string){
    
    const authBody: ISignInUpData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    
    return this._httpClient.post<ISignUpInResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, authBody)
      .pipe(
        tap(authResponse=>{
         this.authHandler(
                  authResponse.email, 
                  authResponse.localId, 
                  authResponse.idToken, 
                  authResponse.refreshToken,
                  +authResponse.expiresIn
                )
               
             })
      )
  }

  signUp(email: string, password: string){

    const registerBody: ISignInUpData = {
      email: email,
      password: password,
      returnSecureToken: true
    }

      return this._httpClient.post<ISignUpInResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, registerBody)
                  .pipe(
                    tap(authResponse=>{
                      this.authHandler(
                               authResponse.email, 
                               authResponse.localId, 
                               authResponse.idToken, 
                               authResponse.refreshToken,
                               +authResponse.expiresIn
                             )
                            
                          })
                  )
    }             

  authHandler(email: string, id: string, token: string, refreshToken: string, expireIn: number){
      const expireDate = new Date(new Date().getTime() + expireIn * 1000)
              this._userData = new User(
                      email, 
                      id, 
                      token, 
                      refreshToken,
                      expireDate
                    )
                    this.logInUser()
    }  

  userData(){
    return this._user$.asObservable()
  }

  logInUser(){
    this._user$.next(this._userData)
  }

}
