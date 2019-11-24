class People {
    
    getPeople(){
        return fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users')
        .then(response => response.json())
    }

    login(data){
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
        //   .then(response => {
        //      if(response.status === 200){
        //          window.open('/home')
        //      }
        //   })
          .catch(function (err) {
            console.log("Error", err);
          });
    }
}

export default People;