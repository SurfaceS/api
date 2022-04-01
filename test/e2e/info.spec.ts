import TMDBConfigurationModel, { TMDBConfigurationInterface } from '../../src/models/TMDBConfiguration';

import * as mongoose from 'mongoose';
import axios from 'axios';
import * as stoppable from 'stoppable';

import { MongoMemoryServer } from 'mongodb-memory-server';
let mongod;

interface UmsApiAxiosResponse  {
  status: number;
  data: TMDBConfigurationInterface;
  headers?: object;
}

const appUrl = 'http://localhost:3000';
let server;

describe('Info endpoint', () => {
  beforeAll(async() => {
    mongod = await MongoMemoryServer.create();
    const mongoUrl = mongod.getUri();
    process.env.MONGO_URL = mongoUrl;
    await mongoose.connect(mongoUrl);
    server = require('../../src/app').server;
    stoppable(server, 0);
  });

  beforeEach(async() => {
    await TMDBConfigurationModel.deleteMany({});
  });

  afterAll(async() => {
    server.stop();
    await mongoose.connection.dropDatabase();
  });

  it('should return configuration', async() => {
    const response = await axios.get(`${appUrl}/api/configuration`) as UmsApiAxiosResponse;

    expect(response.data).toHaveProperty('imageBaseURL');
    expect(response.data.imageBaseURL).toContain('https://image.tmdb.org/');
  });
});
