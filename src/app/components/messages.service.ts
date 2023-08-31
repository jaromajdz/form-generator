import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private _messageInitial$ = new BehaviorSubject<string>('initial message')

  constructor() { }

  getMessages(){
    return this._messageInitial$.asObservable()
  }

  sendMessage(message: string){
    this._messageInitial$.next(message)
  }

}
