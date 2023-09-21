import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signInResponseT, signInUpDataT, singnUpResponseT } from '../types/app.types';

const API_KEY = 'AIzaSyBLgMaypwbtdnxYclS_B_Pu5tPCvH_r57M'

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private _httpClient

  constructor(httpClient: HttpClient) { 
    this._httpClient = httpClient
  }

  signIn(email: string, password: string){
    
    const authBody: signInUpDataT = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    
    return this._httpClient.post<signInResponseT>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, authBody)
  }

  singnUp(email: string, password: string){

    const registerhBody: signInUpDataT = {
      email: email,
      password: password,
      returnSecureToken: true
    }

      return this._httpClient.post<singnUpResponseT>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, registerBody)
  }

}
