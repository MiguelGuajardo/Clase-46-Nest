import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HeroesService {
  heroes: Array<Hero>;
  constructor() {
    this.heroes = [];
  }

  create(createHeroDto: CreateHeroDto) {
    const id = this.generateId();
    const newHero = { id, ...createHeroDto };
    this.heroes.push(newHero);
    return newHero;
  }

  findAll(limite: number): Array<Hero> {
    if (limite !== 0) {
      return this.heroes.slice(0, limite);
    }
    const heroes = this.heroes;
    return heroes;
  }

  findOne(id: number): Hero {
    const hero = this.heroes.find((hero) => hero.id === id);
    return hero;
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
    const updateHero = { id, ...updateHeroDto };
    this.heroes.push(updateHero);
    return updateHero;
  }

  remove(id: number) {
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
    return this.heroes;
  }
  private generateId(): number {
    return this.heroes.length === 0
      ? 1
      : this.heroes[this.heroes.length - 1].id + 1;
  }
}
