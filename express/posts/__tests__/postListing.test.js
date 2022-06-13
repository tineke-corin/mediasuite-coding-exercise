const { listPosts } = require('../postListing')

test('gets titles and slugs', () => {
  const data = listPosts();
  expect(data.length).toBe(6);
  expect(data.map(h => h.title).sort()).toEqual([
      'I’m betting on SPAs',
      'Kiasuism vs No.8 Wire',
      'Media Suite Tech Stack',
      'When 531 People Do Good',
      'Telling the story through graphic design',
      'The Why Behind Work'].sort());
      expect(data.map(h => h.slug).sort()).toEqual([
        'Im-betting-on-SPAs',
        'kiasuism-vs-no8-wire',
        'mediasuite-tech-stack',
        'people-do-good',
        'telling-the-story-through-graphic-design',
        'the-why-behind-work'].sort());
  }
);