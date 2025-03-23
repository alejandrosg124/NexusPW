import { useState } from "react";
import { fetchData } from '../api';
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL; // Importa la variable de entorno

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    }};

    return(
        <>
        
        </>
    )

export default Carousel;