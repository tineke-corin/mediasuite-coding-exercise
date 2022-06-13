const { getPost: cacheGet } = require('./postCache')

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
 function getPost(slug) {
     const post = cacheGet(slug);
     return post ? {
        content: post.body,
        title: post.title,
        tags: post.tags,
     } : undefined;
}

module.exports = { getPost }