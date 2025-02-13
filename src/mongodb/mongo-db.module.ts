import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, {});

@Module({
  providers: [
    {
      provide: 'MONGO_DB',
      useFactory: async () => {
        await client.connect();
        return client.db('nest');
      },
    },
  ],
  exports: ['MONGO_DB'],
})
export class MongoDbModule {}
