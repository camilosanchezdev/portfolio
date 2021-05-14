import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  baseUrl = 'https://camilosanchez.net/api/';
  //baseUrl = 'http://localhost/portfolio/public/api/';

  constructor() {}
}
