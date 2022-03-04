import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FortuneCookie } from './fortune-cookie';

@Injectable()
export class FortuneCookieService {
  constructor() {}

  getFortune(): Observable<FortuneCookie> {
    let fortune = {
      _id: 'xyz1',
      text: 'You have a wonderful fortune!',
      __v: 5,
      created_date: '',
      modified_date: ''
    };

    return of(fortune);
  }
}
