const {MONGO_URL} = require ('../.env')
const express = require ('express');
const mongoose = require('mongoose');
const routes = require ('./routes');
const cors = require('cors');

console.log("Conectando banco de dados...")
const app = express();

//Database Connection
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
  console.log('[ * ] BANCO DE DADOS')
  console.log('Lock and Load')
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);