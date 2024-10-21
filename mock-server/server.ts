import * as express from 'express';
import {Application} from 'express';
import {deleteData, getData, saveData} from './example/example-portocols';
const bodyParser = require('body-parser');

const app: Application = express();
app.use(bodyParser.json());
app.route('/api/examples').get(getData);
app.route('/api/examples').post(saveData);
app.route('/api/examples').delete(deleteData);
const httpServer = app.listen(9000, () => {
  console.log('HTTP REST API Server running at local host port 9000');
});
