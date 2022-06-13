const removeMarkdown = require('remove-markdown');
const { getTopWords } = require('../tags');
const fs = require('fs');
const path = require('path');

test('word frequencies', () => {
    // A copy of the SPAs article, with added hamsters
    const post = fs.readFileSync(path.resolve(__dirname, "test-words-1.md"), 'utf-8');
    const topWords = getTopWords(post);
    expect(topWords).toEqual(["server","Javascript","hamster","page","SPAs"]);
});