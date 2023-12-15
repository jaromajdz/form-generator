import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { UserAuthService } from './userauth.service';

@Injectable()
export class AuthInteceptorService implements HttpInterceptor{

constructor(private _authService: UserAuthService){}  

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return this._authService.userData().pipe(
    take(1),
    exhaustMap(user=>{
      
      if(!user){
        return next.handle(req)
      }
      
      const modifiedReq = req.clone({
        params: new HttpParams().set('auth', user.token as string )
      })
      return next.handle(req)  
    })
  ) 
}

}
