const express = require('express');

const userRouter = require('./Routers/userRouter');
const dataProjectRouter = require('./Routers/dataProjectRouter');
const dataInfoRouter = require('./Routers/dataInfoRouter');
const dataCVRouter = require('./Routers/dataCVRouter');
const dataServiceRouter = require('./Routers/dataServiceRouter')


const connectDB = require('./Config/dbConfig');
const cors = require('cors');
const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());
// app.use('/imgs',express.static('./imgs'));

connectDB();

app.use('/user',userRouter);
app.use('/project',dataProjectRouter);
app.use('/info',dataInfoRouter);
app.use('/CV',dataCVRouter);
app.use('/service',dataServiceRouter);
app.use('/uploads', express.static('uploads'));





app.listen(port, _=> console.log('server started '))