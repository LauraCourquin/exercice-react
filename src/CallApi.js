import axios from "axios";

axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
.then( ({data}) => {
  console.log(data);
})

