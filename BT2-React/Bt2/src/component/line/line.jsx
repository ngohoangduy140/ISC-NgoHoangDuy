import { useEffect, useRef, useState } from "react";

const Line = () => {
  const canvasRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);

  const styles = {
    container: {
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "black",
    },
    line: {
      backgroundColor: "black",
      transform: "rotate(-17deg)",
    },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 700;

    const lineLength = 130,
      lineWidth = 1,
      totalLines = 800,
      delay = 10,
      offset = 0.5;
    const colors = [
      [255, 0, 0], // Red
      [0, 0, 255], // Blue
      [128, 0, 128], // Purple
      [255, 105, 180], // Pink
      [255, 165, 0], // Orange
    ];

    function getColor(fade) {
      let [r, g, b] = colors[colorIndex];
      r = Math.floor(r + (255 - r) * fade);
      g = Math.floor(g + (255 - g) * fade);
      b = Math.floor(b + (255 - b) * fade);
      return `rgb(${r}, ${g}, ${b})`;
    }

    function drawLine(x, y, color) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + lineLength);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }

    let index = 0;
    function animateLines() {
      if (index < totalLines) {
        let x = index * lineWidth;
        let y = index * offset;
        let fade = index / totalLines;
        drawLine(x, y, getColor(fade));
        index++;
        setTimeout(animateLines, delay);
      } else {
        setTimeout(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          setColorIndex((prev) => (prev + 1) % colors.length);
        }, 500);
      }
    }

    animateLines();
  }, [colorIndex]); // Reset animation mỗi khi đổi màu

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.line}></canvas>
    </div>
  );
};

export default Line;
