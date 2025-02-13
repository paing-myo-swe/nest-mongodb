import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MongoDbModule } from './mongodb/mongo-db.module';

@Module({
  imports: [RecipesModule, MongoDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
