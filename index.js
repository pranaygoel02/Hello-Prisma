const cookieParser = require('cookie-parser');
const express = require('express');

const routes = require('./routes/index');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.use('/api', routes);

app.listen(5000, () => {
    console.log('Listening on port 3000');
    }
);