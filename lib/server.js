import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', { answer: 44 });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on port ${config.port}`);
});
