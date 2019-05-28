import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from  '@angular/router';
// import { MessageService } from '../message.service';

import {Hero} from "../hero";
import {HEROES} from '../mock-hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers : [HeroService]
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  
  constructor(
    private heroService : HeroService,
    private route : ActivatedRoute 
    // private messageService : MessageService
  )  { }

  
  ngOnInit() {
    this.getHeroes();
    console.log(this.route.snapshot);
    

  }
  // selectedHero : Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    console.log(this.heroes);

  }    

  
  

}
