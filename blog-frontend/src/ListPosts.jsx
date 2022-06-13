import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListPosts() {
    const [posts, setPosts] = useState([]);
    const [selectedSlug, setSelectedSlug] = useState();

    useEffect(() => {
      const getPosts = async () => {
        const response = await fetch('http://localhost:3000/posts');
        const body = await response.json();
        setPosts(body);
      }
      getPosts();
    }, []);

    const onClickPost = (slug) => setSelectedSlug(slug);

    return (
      <div className="Posts">
        <h1>All posts</h1>
        {posts.map(p => <span key={p.slug}><Link to={'/post/' + p.slug}>{p.title}</Link><br/></span>) }
        <br/>
        <i>There are {posts.length} posts.</i>
        <br/>
      </div>
    );
}
  
export default ListPosts;
