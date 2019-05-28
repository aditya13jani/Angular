import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  
  constructor(private messageService : MessageService, private _http : HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService : fetched heroes');
    return of(HEROES);
  }  

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService : fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
