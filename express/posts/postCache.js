const fs = require('fs');
const path = require('path');
const { getTopWords } = require('../utils/tags');

const folderPath = '../assets/posts';

/*
 * Holds a simple in-memory cache of the blog content files in assets/posts, parsed into 
 * this structure:
 * 
 * {
 *   title: 'Kiasuism vs No.8 Wire',
 *   author: 'Steve Liew',
 *   slug: 'kiasuism-vs-no8-wire',
 *   body: 'One of the most common questions...',
 * }
 */

const postCache = {};

function addToCache(fileContent) {
    const content = parseContent(fileContent);
    postCache[content.slug] = content;
}

function loadCache() {
    const filePaths = fs.readdirSync(folderPath)
        .map(filename => path.join(folderPath, filename))
        .filter(filePath => fs.lstatSync(filePath).isFile());
    filePaths.forEach(p => {
        const post = fs.readFileSync(p, 'utf-8');
        addToCache(post);
    });
}

/*
 * An ugly little parser to split the file into the relevant parts.
 */
function parseContent(fileContent) {
    const [_, header, body] = fileContent.split("===");
    const [ __, titleLine, authorLine, slugLine ] = header.split("\n");
    const title = titleLine.split('Title: ')[1].trim();
    const slug = slugLine.split('Slug: ')[1].trim();
    const author = authorLine.split('Author: ')[1].trim();

    return {
        title: title,
        slug: slug,
        author: author,
        body: body,
        tags: getTopWords(body),
    };
}

function loadCacheIfNeeded() {
    if (Object.values(postCache).length === 0) {
        loadCache();
    }
}

function listPosts() {
    loadCacheIfNeeded();
    return Object.values(postCache);
}

function getPost(slug) {
    loadCacheIfNeeded();
    return postCache[slug];
}

module.exports = { listPosts, getPost }