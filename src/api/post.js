import Storage from '../services/storage';

class Post {

    getPost() {
        return fetch(`https://it-blog-posts.herokuapp.com/api/posts`)
            .then(response => response.json())
    }

    post(data) {
        return fetch(
            'https://it-blog-posts.herokuapp.com/api/posts', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )}

        // getPostById(id) {
        //     return fetch(`https://it-blog-posts.herokuapp.com/api/posts/${id}`)
        //         .then(response => response.json())  
        // }
      
}

export default Post;