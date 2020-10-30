import React, { useState } from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Container from './Container';
import NavBar from './NavBar';
import { addNewPost } from '../controllers/post_controller';


function NewPostPage(){

  const [title,setTitle]=useState("");
  const [subtitle,setSubtitle] = useState("");
  const[content,setContent]= useState("");

function handleCreateNewPost(e) {
  e.preventDefault();

  if(addNewPost(title, subtitle, content)) {
     alert("post was succesfully added,you can add a new post");
     setTitle("");
     setSubtitle("");
     setContent("");
  } else {
    alert("one or mor field has not been filled");
  }
}

    return(
    <>
     <NavBar />
     <Hero title="CREATE A NEW POST" subtitle="This is where your health matter's to us" />
    <Container>
     <form className="blog-new-post-page my-5 py-5 mx-auto">
       <div className="form-group">
         <label htmlfor="exampleInputEmail1">Post Tittle</label>
         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e) => setTitle(e.target.value)}/>
       </div>
       <div className="form-group">
          <label htmlfor="exampleInputPassword1">Post Subtittle</label>
          <input type="text" className="form-control" id="exampleInputPassword1"value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
       </div>
       <div className="form-group">
         <label htmlfor="exampleInputPassword1">Post Content</label>
         <textarea  className="form-control" id="exampleInputPassword1" rows="10"value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
        </div>
       <button onClick={handleCreateNewPost} className="btn btn-block btn-primary">Create New Post</button>
      </form>  
     </Container>
    <Footer />
   </>
 )
}

export default NewPostPage;