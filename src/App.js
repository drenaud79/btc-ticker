import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';

function App() {

  

  /*
  fetch('flowers.jpg')
  .then(function(response) {
    return response.blob();
  })
  .then(function(myBlob) {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });*/

  let url = "http://192.168.81.61:8080/Ticker"

  const [bitcoin, setBitcoin] = useState(0)

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const time = setTimeout(() => {
          
      setBitcoin(data.result.XXBTZEUR.a[0])
      console.log(data.result.XXBTZEUR.a[0])
      }, 2000);
    });
  
  }, [])

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       {bitcoin}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
