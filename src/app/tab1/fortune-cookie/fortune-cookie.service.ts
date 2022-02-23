import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FortuneCookie } from './fortune-cookie';

@Injectable()
export class FortuneCookieService {
  constructor() {}

  getFortune(): Observable<FortuneCookie> {
    let fortune = {
      id: 1,
      text: 'You have a wonderful fortune!',
    };

    return of(fortune);
  }
}
