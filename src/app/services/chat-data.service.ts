import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Message } from '../shared/models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatDataService {
  constructor(private store: Store) {

  }

  public setLocalStorageForAllChat(
    chatName: string,
    chatData: Message[]
  ): void {
    localStorage.setItem(`${chatName}`, JSON.stringify(chatData));
  }

  public setLocalStorageForSingleChat(
    chatName: string,
    chatData: Message
  ): void {
    localStorage.setItem(`${chatName}`, JSON.stringify(chatData));
  }

  public getLocalStorage(chatName: string) {
    return localStorage.getItem(chatName);
  }
}
