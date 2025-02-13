import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { MongoDbModule } from 'src/mongodb/mongo-db.module';

@Module({
  imports: [MongoDbModule],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
