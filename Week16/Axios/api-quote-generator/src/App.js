
import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {
const [quote, setQuote] = useState ("")
const [author, setAuthor] = useState("")
  const getQuote =() =>
{
  axios.get( 'https://api.quotable.io/random')
  .then (res => {
    setQuote(res.data.content)
    setAuthor(res.data.author)
console.log (res.data)
  }).catch (err => {
console.log(err)
  })
}
return (
  <div className='App'>
    <button id = "quote-button" onClick= {getQuote}>Get Quote</button>
   <div className='quote-container'>
    <p className= 'quote'>{quote}</p>
    {/* { quote ? <p>{quote}</p> : null}
    otra forma mas facil: {quote && <p>{quote}</p>} */}
    <p className='author'>{author}</p>
  </div>
  </div>
);

}

export default App;
