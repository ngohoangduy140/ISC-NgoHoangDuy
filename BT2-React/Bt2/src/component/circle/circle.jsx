import React, { useEffect, useRef } from 'react';

const Circle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let radius = 5;
    const maxRadius = 200;
    const minRadius = 5;
    const growthRate = 0.4;
    let animationFrameId;

    const drawCircle = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.closePath();

      radius += growthRate;

      if (radius >= maxRadius) {
        radius = minRadius;
      }

      animationFrameId = requestAnimationFrame(drawCircle);
    };

    drawCircle();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'blue',
  },
};

export default Circle;