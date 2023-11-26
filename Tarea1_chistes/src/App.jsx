import { useState, useEffect } from 'react';
import './App.css';


function App() {
  
  const [errorMessage, setErrorMessage] = useState("");
  const [cargando, setCargando] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState("broma");
  const [data, setData] = useState(null);

  
const generarFrase = () => {
    
  fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
        .then((response) => {
         
      if (response.status === 404) {
        throw new Error("No se encontró la frase");
      }
      return response.json();
    })
    .then((data) => {
      const p = document.getElementById("frase");
      p.innerText = data.data[0].quoteText;
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error);
    })
    .finally(() => {
      console.log("Se terminó de ejecutar el fetch");
      
    });
    
    
}; 



const generarBroma = () => {
   
  fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
        .then((response) => {
          
          if (response.status === 404) {
        throw new Error("No se encontró la frase");
      }
      return response.json();
       
    })
    .then((data) => {
      const p = document.getElementById("broma");
      p.innerText = data.data[0].quoteText;
      
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error);
    })
    .finally(() => {
      console.log("Se terminó de ejecutar el fetch");
      
    });
    
    
}; 
      
useEffect(() => {
  generarBroma();
 
}, []);


return (
  <>

<div className="boton-container">  
    <h1>Frases</h1>
    <div className="card">
      <div className="buttons">
        
          <button onClick={generarFrase} className="boton-circular">💬 Genera frase</button>
        </div>
      </div>
      {cargando && <div className="indicador-carga">Cargando...</div>} {/* Indicador de carga */}
      <p id="frase"></p>
</div>

    <div className="separador"></div>

<div className="boton-container"> 
    <h1>Bromas</h1>
    
      <div className="card">
        <div className="buttons">
        
          <button onClick={generarBroma} className="boton-circular">🤡Genera broma</button>
        </div>
      </div>
      {cargando && <div className="indicador-carga">Cargando...</div>} {/* Indicador de carga */}
      <p id="broma"></p>
</div>
  </>
);
}


export default App;
