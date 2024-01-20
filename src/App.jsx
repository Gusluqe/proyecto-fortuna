import './App.css'
import RandomPhrase from './components/RandomPhrase';
import phrases from './utils/phrases.json'
import randomIndex from './services/randomindex';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase';

import bgArray from './utils/bgArray.json';

function App() {
  

  const sentence = randomIndex(phrases);

  const bgIndex = randomIndex(bgArray);

  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgIndex);

  const bgStyle = {
    backgroundImage: `url(../assets/fondo${bgApp}.png)`,
  }

  

  return (    
    <div className='app' style={bgStyle}>
       <div className='conteiner'>
         <h1>Galletitas de la Fortuna</h1> 
          <ButtonPhrase
           setQuote={setQuote}
           setBgApp={setBgApp}
          />           
          <RandomPhrase 
          quote={quote}
          />
             
        </div>
    </div>    
  )
}

export default App
