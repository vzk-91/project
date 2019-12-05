class Post {
    
    getPost(){
        return fetch('https://it-blog-posts.herokuapp.com/api/posts')
        .then(response => response.json())
    }

    post(data){
        return fetch( 
            'https://it-blog-posts.herokuapp.com/api/posts',
            {
              method: "POST", 
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json' 
              }
            }
          )
    }
}

export default Post;