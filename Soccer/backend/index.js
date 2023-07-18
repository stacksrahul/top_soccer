import express from 'express';

const app = express();
const PORT = 3000;

// mongo connection
mongoose.Promise = global.Promise;  //use promise library that's built into javascript
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body-parser
app.use(bodyparser.urlencoded({ extended: true }));     //use url-encoder when form submitted
app.use(bodyparser.json());     //use json parser

// main application
app.get('/',(req,res) =>
    res.send(`Our application is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your soccer server is running on port ${PORT}`)
);
