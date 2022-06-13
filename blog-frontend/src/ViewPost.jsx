import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';

function PostContent(props) {
  return (
  <ReactMarkdown>
    {props.post}
  </ReactMarkdown>
  );
}

function ErrorMessage(props) {
  return props.error ? <span style={{color: 'red'}}>{props.error}</span> : null;
}

function ViewPost(props) {
    let { slug } = useParams();

    const [post, setPost] = useState();
    const [title, setTitle] = useState();
    const [tags, setTags] = useState();
    const [error, setError] = useState();

    useEffect(() => {
      const getPost = async () => {
        if (slug) {
          const response = await fetch('http://localhost:3000/post/' + slug);
          if (response.status !== 200) {
            setError("That post was not found!");
          } else {
            const body = await response.json();
            setPost(body.content);
            setTitle(body.title);
            setTags(body.tags);
            setError(null);
          }
        }
      }
      getPost();
    }, [slug]);

    return (
      <>
        <h2>{title}</h2>
        <PostContent post={post}/>
        <ErrorMessage error={error}/>
        <hr/>
        <i>Tags: {tags?.join(", ")}</i>
        <br/>
        <Link to={'/posts'}>Back</Link>
      </>
    );
}
  
export default ViewPost;
 