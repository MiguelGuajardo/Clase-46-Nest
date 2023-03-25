import { PartialType } from '@nestjs/mapped-types';
import { CreateHeroDto } from './create-hero.dto';

export class UpdateHeroDto extends PartialType(CreateHeroDto) {
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}
