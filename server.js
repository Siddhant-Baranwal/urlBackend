const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
const schema = new mongoose.Schema({
  url: String,
  id: String,
})

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: 'GET,POST', 
  credentials: true, 
  optionsSuccessStatus: 204
}))

const Url = mongoose.model("ShortUrl", schema);
const port = 4000;

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'ShortURL',
})
.then((c) => console.log(`Database connected with ${c.connection.host}`))
.catch((e) => console.log(e))

app.listen(port, ()=>{
  console.log(`Server is working on port: ${port}`);
});

app.post('/new', async (req, res) => {
  const {url, id} = req.body;
  try{
    await Url.create({url, id}); 
    res.send({
      success: true,
    })
  } catch(error){
    res.send({
      success: false,
    })
  }
})

app.post('/redirect', async (req, res) => {
  const {uid} = req.body;
  Url.findOne({ id: uid})
  .then(user => {
    res.send({
      success: true,
      url: user.url
    });
  })
  .catch(err => {
    res.send({
      success: false, 
      url: err
    })
  })
})

app.get('/', (req, res) => {
  res.send('Landing page of the backend site.')
})