import './App.css';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState([]);
  const btn = () => {
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
.then( ({data}) => {
setQuote(data);
})
  };
  
  return (
    <div className="App">
      {quote.map((simpsons, index) =>  <QuoteCard key={index} {...simpsons} /> )}
      <button type="button"onClick={btn} >Get Quote</button>
    </div>
  );

}

export default App;


