import { Inject, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Db, ObjectId } from 'mongodb';

@Injectable()
export class RecipesService {
  constructor(@Inject('MONGO_DB') private db: Db) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.db.collection('recipes').insertOne(createRecipeDto);
  }

  findAll() {
    return this.db.collection('recipes').find().toArray();
  }

  findOne(id: string) {
    return this.db.collection('recipes').findOne({ _id: new ObjectId(id) });
  }

  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return this.db
      .collection('recipes')
      .updateOne({ _id: new ObjectId(id) }, { $set: updateRecipeDto });
  }

  remove(id: string) {
    return this.db.collection('recipes').deleteOne({ _id: new ObjectId(id) });
  }
}
