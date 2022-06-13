const { getPost } = require('../postContent');
const { listPosts } = require('../postListing')

test('gets content', () => {
  const data = getPost('people-do-good');
  console.log(data);
  }
);