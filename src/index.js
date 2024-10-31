import express from 'express';
import connectDB from './config/dbConfig.js';
import  apiRouter from './routers/apiRouter.js';
import multer from 'multer';
import { isAuthenticated } from './middlewares/authMiddleware.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './utils/swaggerOptions.js';
const PORT = 3000; // port number



const app = express(); // create express app server

const upload = multer();

app.use(express.json()); // middleware to parse json data from request body
app.use(express.text());
app.use(express.urlencoded());

app.use('/api', apiRouter); // if the url starts with /api, then the request is forwarded to the apiRouter

const swaggerDocs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/ping', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  console.log(req.user);
  
  
  
  return res.json({ message: 'pong' });
});


//read all posts, delete post, update post, read single post


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  connectDB();
});

/**
 * npm init -y
 * npm install express
 * node src/index.js
 */
