import React from'react';

function Comment ( {Comment} ){
    return(
<div class="card mb-1 border-0 blog-comment">
             <div class="card-body px-0">
               <blockquote class="blockquote mb-0">
                 <p>{Comment}</p>
                 <footer class="blockquote-footer"> by <cite title="Source Title">Anonymous</cite></footer>
               </blockquote>
             </div>
           </div>
    )
}

export default Comment;