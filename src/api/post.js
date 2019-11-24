class Post {
    
    getPost(){
        return fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/postblog')
        .then(response => response.json())
    }
}

export default Post;