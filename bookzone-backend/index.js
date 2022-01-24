const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const logger = require('./middleware/logger');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const mainRoutes = require('./routes/index')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./config/swagger_output.json');
app.use(compression());
app.use(express.json());
app.use(express.static('public'));
//form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('*', cors());
app.set('view engine', 'pug');
app.use(morgan('tiny'))
app.use('/', mainRoutes);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(helmet());


// if (app.get('env') === 'development') {
//   app.use(logger);
// }

mongoose.connect('mongodb://localhost/bookzone',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useFindAndModify: true })
  .then(() => {
    console.log("MongoDB ga ulanish hosil qilindi...");
  })
  .catch((err) => {
    console.log("MongoDBga ulanishda xatolik yuz berdi...", err);
  })

const port = process.env.PORT || 8000
console.log(port);


app.listen(port)