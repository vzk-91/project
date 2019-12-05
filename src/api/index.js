import People from "./people";
import Post from "./post";




class Api {
    constructor() {
      this.people = new People();
      this.post = new Post();
    }
  }

         const api = new Api();
  export const getPeople = api.people.getPeople;
  export const getPost = api.post.getPost;
  export const login = api.people.login;
  export const registration  = api.people.registration;
  export const byId = api.people.byId;

  

