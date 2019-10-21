import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterURL = 'https://gateway.marvel.com/v1/public/characters?ts=1571257654329&apikey=05a6b7cb68fe6bdf1acc7c7825142568&hash=3f27f48a0b039884062dde1a98b5bf52&limit=10.in/api/users';

  constructor(private http: HttpClient) { }

  getCharacters() {

    //return of(CHARACTERS);
    //return this.http.get<Character[]>(this.characterURL).pipe(map(data => data));
    return this.http.get(this.characterURL);
       
    }
}
