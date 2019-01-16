import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selecthero: Hero;
  heros: Hero[];

  onselect(hero: Hero): void {
    this.selecthero = hero
  }

  ngOnInit() {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService
    .getHeroes().subscribe(heros => this.heros = heros);
  }
  constructor(private heroService: HeroService) { }

}

