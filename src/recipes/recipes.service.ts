import { Inject, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Db, ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { Recipe } from './entities/recipe.entity';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipesService {
  constructor(
    //@Inject('MONGO_DB') private db: Db,
    // @InjectModel(Recipe.name) private recipeModel: Model<Recipe>,
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
  ) {}

  create(createRecipeDto: CreateRecipeDto) {
    //return this.db.collection('recipes').insertOne(createRecipeDto);
    //return this.recipeModel.create(createRecipeDto);
    return this.recipeRepository.save(createRecipeDto);
  }

  findAll() {
    //return this.db.collection('recipes').find().toArray();
    //return this.recipeModel.find().exec();
    return this.recipeRepository.find();
  }

  findOne(id: string) {
    //return this.db.collection('recipes').findOne({ _id: new ObjectId(id) });
    //return this.recipeModel.findById(id).exec();
    return this.recipeRepository.findOneBy({ _id: new ObjectId(id) });
  }

  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    // return this.db
    //   .collection('recipes')
    //   .updateOne({ _id: new ObjectId(id) }, { $set: updateRecipeDto });
    //return this.recipeModel.findByIdAndUpdate(id, updateRecipeDto).exec();
    return this.recipeRepository.update(id, updateRecipeDto);
  }

  remove(id: string) {
    //return this.db.collection('recipes').deleteOne({ _id: new ObjectId(id) });
    //return this.recipeModel.findByIdAndDelete(id).exec();
    return this.recipeRepository.delete(id);
  }
}
