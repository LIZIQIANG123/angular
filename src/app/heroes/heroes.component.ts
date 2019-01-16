import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heros } from '../morehero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
hero:Hero={
  id:1,
name:'liziqiang'
};
selecthero:Hero;
heros=Heros;
onselect(hero : Hero):void{
this.selecthero=hero
}
  constructor() { }

  ngOnInit() {
  }

}

