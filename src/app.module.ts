import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MongoDbModule } from './mongodb/mongo-db.module';
import { MongooseModule } from '@nestjs/mongoose';

const uri = 'mongodb://localhost:27017/nest';

@Module({
  imports: [RecipesModule, MongoDbModule, MongooseModule.forRoot(uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
