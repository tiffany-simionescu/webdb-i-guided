const express = require('express');

const PostRouter = require('./posts/post-router.js');

const server = express();

server.use(express.json());

server.use('/api/posts', PostRouter);

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "Something went wrong"
  })
})

server.get('/', (req, res) => {
  res.send('<h3>DB Helpers with knex</h3>');
});

module.exports = server;