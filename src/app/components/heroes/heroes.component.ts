import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private heroesService: HeroesService,
      private router: Router
    ) {

  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe = (idx: number) => {
    this.router.navigate(['/heroe', idx]);
  }

}
