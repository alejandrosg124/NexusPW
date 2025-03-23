import { useState } from "react";
import { fetchData } from '../api';
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({images}) => {
    const [index, setIndex] = useState(0);
  
    const siguienteImagen = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const anteriorImagen = () => {
      setIndex((prevIndex) =>
        (prevIndex - 1 + images.length) % images.length);
    };
    
  return(
      <>
        <div style={{textAlign: "center"}}>
          <button onClick={anteriorImagen}>⬅️</button>
          <img src={images[index]} alt={`Imagen ${index + 1}`}
              style={{ width: "300px", height: "200px", objectFit: "cover", margin: "10px" }}
          />
        </div>
      </>
  )
  
  };

export default Carousel;