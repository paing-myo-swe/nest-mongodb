import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MongoDbModule } from './mongodb/mongo-db.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipes/entities/recipe.entity';

const uri = 'mongodb://localhost:27017/nest';

@Module({
  imports: [
    RecipesModule,
    MongoDbModule,
    MongooseModule.forRoot(uri),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: uri,
      synchronize: true, // This is for development only
      useUnifiedTopology: true,
      entities: [Recipe],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
