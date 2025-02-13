import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
//import { MongoDbModule } from 'src/mongodb/mongo-db.module';
//import { MongooseModule } from '@nestjs/mongoose';
//import { Recipe, RecipeSchema } from './entities/recipe.entity';

@Module({
  imports: [
    //MongoDbModule,
    //MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
    TypeOrmModule.forFeature([Recipe]),
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
