import { Injectable } from '@angular/core';
import { FortuneCookie } from './fortune-cookie';

@Injectable()
export class FortuneCookieService {

  constructor() { }

  getFortune(): FortuneCookie {
    let fortune = {
      id: 1,
      text: "You have a wonderful fortune!"
    }
    return fortune;
  }
}