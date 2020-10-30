import React from 'react';
import BlogCard from './BlogCard';
import Container from './Container';
import posts from '../resources/posts';

function AllBlogPosts() {
  return(
    <Container>
       {
         posts.map( (val, index) => {
           let content = val.content.split("<p>").join("").split("</p>")[0];
           return <BlogCard key={index} title={val.title} subtitle={val.subtitle} content={content} id={index} />
         })
       }
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
    </Container> 
  )
}

export default AllBlogPosts;