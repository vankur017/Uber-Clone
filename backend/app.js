const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRotues = require('./routes/maps.routes');
const ridesRoutes = require('./routes/rides.routes');

connectToDb();


const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true,              // Allow credentials
};
  app.options('/users/register', cors(corsOptions));
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  
  app.get('/', (req, res) => {
      res.send('Hello World');
  });
  
  app.use('/users', userRoutes);
  app.use('/captains', captainRoutes);
  

  app.use((err, req, res, next) => {
    //   console.error(err.stack);
      console.log(`Received request: ${req.method} ${req.url}`);
      
      res.status(500).json({ error: 'Internal Server Error' });
      next()
  });
  
  app.use('/maps', mapsRotues);
  app.use('/rides', ridesRoutes)

  
  module.exports = app;