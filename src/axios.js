import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/foo-bar");
// api.themoviedb.org/3/foo-bar
 export default instance;
