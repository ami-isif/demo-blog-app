import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Container from './Container';
import Footer from './Footer';
import NavBar from './NavBar';
import Comment from './Comment';
import scrollToTOP from '../controllers/scroll_controller';
import posts from '../resources/posts';
import { likePost, dislikePost, getLikes, getDislikes, getComments, addComment } from '../controllers/post_controller';

function ArticlePage ( props ) {
    const id = props.location.state.id;
    const currentSelectedPost= posts[id];

    const[likes,setlikes]=useState(getLikes(id));
    const[dislikes,setDislikes]=useState(getDislikes(id));
    const[userComment,setUserComment]=useState("");

function handleNewComment(e) {
   e.preventDefault();
   addComment(id,userComment)
   setUserComment("");
}
    

useEffect(() => {
scrollToTOP();
} , [] )

  return(
    <>
       <NavBar />
       <Hero title={currentSelectedPost.title} subtitle={currentSelectedPost.subtitle} img={currentSelectedPost.image} />
       <Container className="article-page">
             <div dangerouslySetInnerHTML={{ __html: currentSelectedPost.content }}></div>


             <div className="btn-toolbar mt-3 mt-5" role="toolbar" aria-label="Toolbar with button groups">
               <div className="btn-group mr-2" role="group" aria-label="First group">
               <button type="button" className="btn btn-primary" onClick={()=> setlikes(likePost(id)) }><i className='bx bxs-like' >{likes} Likes</i></button>
             </div>
             <div className="btn-group mr-2" role="group" aria-label="Second group">
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-danger" onClick={()=> setDislikes(dislikePost(id)) }><i className='bx bxs-dislike' >{dislikes} Dislikes</i></button>
            </div>
          </div>


         <form className="mb-5 mt-5">
           <div className="form-group">
             <label for="exampleFormControlTextarea1">Comment as Anonymous</label>
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={userComment} onChange={(e) => setUserComment(e.target.value)} ></textarea>
         </div>
         <div className="form-group">
           <button className="btn btn-primary" onClick={ handleNewComment } >Comment</button>
         </div>
        </form>
       <div className="mb-5">
         {
          getComments(id).map( (val, index) => {

            return <Comment  key={index} Comment={val} /> 
          })

          }
       </div>
        </Container>
       <Footer />
      </>
     )
  }

export default ArticlePage; 