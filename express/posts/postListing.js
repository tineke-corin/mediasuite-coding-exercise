const { listPosts: cacheList } = require('./postCache')

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
 function listPosts() {
    return cacheList().map(v => ({ title: v.title, slug: v.slug }));
}

module.exports = { listPosts }