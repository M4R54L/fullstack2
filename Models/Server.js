const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.indexPath = path.join(__dirname, '..', 'client', 'build');

    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static(this.indexPath));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running at port ${this.port}`);
    });
  }
}

module.exports = App;
