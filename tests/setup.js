jest.setTimeout(15000); // 15 second limit per failed test

require('../models/User');
require('../models/Blog');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });
