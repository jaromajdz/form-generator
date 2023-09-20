import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MenuService {

  private _sub = new Subject<number>()

  constructor() { }

  getMenuReset(){
    return this._sub.asObservable()
  }

  sendReset(nr: number){
    this._sub.next(nr)
  }

}
