const express = require('express')
const { getTopWords } = require('./utils/tags')
const app = express()
const rootPostDir = './server/assets/posts'
const { listPosts } = require('./posts/postListing')
const { getPost } = require('./posts/postContent')

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
app.get('/post/:slug', function (req, res) {
  const post = getPost(req.params.slug);
  if (post) {
    res.send(post);
  } else {
    res.sendStatus(404);
  }
})

/**
 * Returns a json array of all posts, formatted as:
 * [
 *  {
 *    title: <article's title>,
 *    slug: <article's slug>
 *  },
 *  ...
 * ]
 */
app.get('/posts', function (req, res) {
  res.send(listPosts());
})

app.listen(4000, function () {
  console.log('Server listening on port 4000!')
})
