const express = require('express');

const server = express();

const postsRouter = require('../posts/posts-router'); // add this line after requiring express

server.use(express.json());
server.use('/api/posts', postsRouter); // add this line to use the router

server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Posts API</h2>
      <p>Welcome to the Lambda Hubs API</p>
    `);
  });

module.exports = server;
// this is equivalent to: export default server;