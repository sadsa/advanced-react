import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from 'testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  const initialContent = serverRender();
  response.render('index', { initialContent });
});

app.get('/data', function(request, response) {
  response.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on port ${config.port}`);
});
