"use client";
import React, { useEffect, useRef } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  initialAngle?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className, initialAngle }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const element = imageRef.current;
    let angle = initialAngle !== undefined ? initialAngle : Math.random() * 2 * Math.PI; // Ángulo inicial aleatorio
    const speed = 0.02; // Velocidad del ángulo
    const radiusX = 30; // Radio horizontal de la elipse
    const radiusY = 30; // Radio vertical de la elipse
    const animationDuration = 10; // Duración de la animación en segundos

    let startTime: number | null = null;

    const animate = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;

      // Calcular el tiempo transcurrido en segundos
      const elapsedTime = (timestamp - startTime) / 1000;

      if (element) {
        // Calcular el ángulo en función del tiempo transcurrido
        const currentAngle = angle + (elapsedTime / animationDuration) * 2 * Math.PI;

        // Calcular las coordenadas X e Y en función del ángulo
        const translateX = radiusX * Math.cos(currentAngle);
        const translateY = radiusY * Math.sin(currentAngle);

        // Aplicar los nuevos valores de transform
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }

      // Solicitar el siguiente frame de animación
      requestAnimationFrame(animate);
    };

    // Iniciar la animación
    const animationFrame = requestAnimationFrame(animate);

    // Limpiar la animación cuando el componente se desmonte
    return () => cancelAnimationFrame(animationFrame);
  }, [initialAngle]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={className}
      style={{ transition: "transform 0.5s ease" }} // Suaviza el movimiento
    />
  );
};

export default AnimatedImage;
