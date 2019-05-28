import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] = ['i am batman'];

  add(message : string){
    this.messages.push(message);
  }

  delete(){
    this.messages = [];
  }
  constructor() { }
}
