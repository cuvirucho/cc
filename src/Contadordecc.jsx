import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function Contadordecc() {
  const [count, setCount] = useState(0);

  const tikest = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  // Estado para manejar si el botón fue presionado
  const [isClicked, setIsClicked] = useState(false);

  // Función para cambiar el estado
    // Estado para almacenar los índices de los ítems clickeados
    const [clickedItems, setClickedItems] = useState([]);

    // Cargar el estado de clickedItems desde localStorage al montar el componente
    useEffect(() => {
      const storedClickedItems = JSON.parse(localStorage.getItem('clickedItems'));
      if (storedClickedItems) {
        setClickedItems(storedClickedItems);
      }
    }, []);
  
    // Guardar clickedItems en localStorage cada vez que cambie
    useEffect(() => {
      if (clickedItems.length > 0) {
        localStorage.setItem('clickedItems', JSON.stringify(clickedItems));
      }
    }, [clickedItems]);
  
    const handleButtonClick = (index) => {
      // Solo agregamos el índice si no está ya en el estado
      if (!clickedItems.includes(index)) {
        setClickedItems((prevItems) => [...prevItems, index]);
      }
    };
  
  return (
    <>
      <section className="TITULOS">
        <img
          className="imgolo"
          src="data:image/png;base64,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"
          alt="logo"
        />
      </section>
<p className='frse'   >Feliz Navidad pollito te quiero mucho att tu ñaño disfrutas tus css  </p>
<section className="Contadordecc">
      {tikest.map((item, index) => (
        <div
          key={item}
          onClick={() => handleButtonClick(index)} // Pasa el índice al hacer clic
          style={{
            backgroundColor: clickedItems.includes(index) ? "red" : "white", // Cambia el color solo si el ítem está en el estado de clickeados
            color: clickedItems.includes(index) ? "white" : "black", // Cambia el color del texto solo si el ítem está en el estado de clickeados
          }}
          className="ITE"
        >
          <i id="ICONO" className="bx bxs-bowl-hot"></i>
          <h2>Valido por un cc almueroso Nª{item}</h2>
        </div>
      ))}
    </section>
    </>
  );
}

export default Contadordecc;
