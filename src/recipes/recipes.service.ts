import { Inject, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Db, ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { Recipe } from './entities/recipe.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RecipesService {
  constructor(
    //@Inject('MONGO_DB') private db: Db,
    @InjectModel(Recipe.name) private recipeModel: Model<Recipe>,
  ) {}

  create(createRecipeDto: CreateRecipeDto) {
    //return this.db.collection('recipes').insertOne(createRecipeDto);
    return this.recipeModel.create(createRecipeDto);
  }

  findAll() {
    //return this.db.collection('recipes').find().toArray();
    return this.recipeModel.find().exec();
  }

  findOne(id: string) {
    //return this.db.collection('recipes').findOne({ _id: new ObjectId(id) });
    return this.recipeModel.findById(id).exec();
  }

  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    // return this.db
    //   .collection('recipes')
    //   .updateOne({ _id: new ObjectId(id) }, { $set: updateRecipeDto });
    return this.recipeModel.findByIdAndUpdate(id, updateRecipeDto).exec();
  }

  remove(id: string) {
    //return this.db.collection('recipes').deleteOne({ _id: new ObjectId(id) });
    return this.recipeModel.findByIdAndDelete(id).exec();
  }
}
