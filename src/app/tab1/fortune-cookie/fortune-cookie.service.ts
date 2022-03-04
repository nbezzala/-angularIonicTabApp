import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FortuneCookie } from './fortune-cookie';

@Injectable()
export class FortuneCookieService {
  constructor(private http: HttpClient) {}

  private fortuneUrl = 'https://ajnabee.azurewebsites.net/fortune';

  getFortune(): Observable<FortuneCookie[]> {
    return this.http.get<FortuneCookie[]>(this.fortuneUrl);
  }
}
