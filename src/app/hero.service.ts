import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heros } from './morehero'
import { MessageService } from './message.service'
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
   
   }
  getHeroes():Observable <Hero[]>{
    this.messageService.add('liziqiang')
    return  of(Heros)
  }
}
