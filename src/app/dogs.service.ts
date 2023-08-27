import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogsService {

  constructor(private http: HttpClient) {}

  getRandomImage() {
    return this.http.get<string>('https://dog.ceo/api/breeds/image/random');
  }

}
