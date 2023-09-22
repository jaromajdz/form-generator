import { numberAttribute } from "@angular/core"

export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _refreshToken: string,
    private _tokenExpireDate: Date
  ) {}

    get token(){
        
        if(!this._tokenExpireDate || new Date() < this._tokenExpireDate){
            return this._token
        }
        
        return null
        
    }

   get refreshToken(){
        return this._refreshToken
   } 
}
