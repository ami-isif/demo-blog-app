import posts from '../resources/posts';

export function getLikes(id) {

    return posts[id].likes ? posts[id].likes : 0;

     }

 export function getDislikes(id) {

    return posts[id].dislikes ? posts[id].dislikes : 0;

 }

export function likePost(id) {

    if(posts[id].likes) {

        posts[id].likes ++;

    } else {

        posts[id].likes= 1;   

}

   return posts[id].likes;
}

export function dislikePost(id) {

    if ( posts[id].dislikes ) { 

        posts[id].dislikes ++;

} else {

    posts[id].dislikes= 1;  

 } 

 
 return posts[id].dislikes; 

}

export function addComment(id, comment) {

       if (posts[id].comments) {

           posts[id].comments.push(comment);

       } else {

           posts[id].comments = [comment];

  }

}

export function getComments(id) {

  return posts[id].comments ? ([...posts[id].comments].reverse()) : []

}

export function addNewPost(new_title, new_subtitle, new_content) {

 if(new_title && new_subtitle && new_content) {
    posts.unshift(
    {
       title: new_title, 
       subtitle: new_subtitle,
       content: new_content,
       }
     )

    return true;
  }

    return false;

}