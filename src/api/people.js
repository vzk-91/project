class People {
    
    getPeople(){
        return fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users')
        .then(response => response.json())
    }

    login(data){
      console.log(data)
       return fetch( 
            'https://it-blog-posts.herokuapp.com/api/people/login',
            {
              method: "POST", 
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json' 
              }
            }
          )
    }

    registration(data){
      return   fetch( 
        'https://it-blog-posts.herokuapp.com/api/people',
        {
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            'Content-Type': 'application/json' 
          }
        }
      )
    }

    byId(id){
      return  fetch(`https://it-blog-posts.herokuapp.com/api/people/${id}`)
      .then(data=>data.json())
    }
}

export default People;