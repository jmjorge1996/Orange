import express from 'express'
import router from './routes/graphicCard.js'
import mongoose from 'mongoose'

const app = express()

app.use(express.json());

mongoose.Promise = global.Promise

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://mongo:27017/orange?directConnection=true', {useNewUrlParser: true})
.catch(error => {console.log(error.stack)})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/graphics-cards', router)

app.listen(5000);
console.log('API running on localhost:5000');