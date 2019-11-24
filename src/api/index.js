import People from "./people";
import Post from "./post";




class Api {
    constructor() {
      this.peoples = new People();
      this.post = new Post()
    }
  }

  export const api = new Api();
  export const getPeople = api.peoples.getPeople();
  export const getPost = api.post.getPost();
  export const login = api.peoples.login;

  

