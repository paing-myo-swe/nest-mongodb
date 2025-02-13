import { OmitType } from '@nestjs/mapped-types';
import { Recipe } from '../entities/recipe.entity';

export class CreateRecipeDto extends OmitType(Recipe, ['_id'] as const) {}
