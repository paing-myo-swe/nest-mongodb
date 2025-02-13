// export class Recipe {
//   _id: string;
//   name: string;
//   isFavorite: boolean;
// }

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

@Schema()
export class Recipe {
  _id: ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop()
  isFavorite?: boolean;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

RecipeSchema.pre('save', function (next) {
  this.name = this.name.trim();
  next();
});
