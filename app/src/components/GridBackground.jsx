import React from 'react';
import './GridBackground.css';

export default function GridBackground({
  children,
  cellSize = 50,
  lineColor = 'rgba(0,0,0,0.1)',
  width = 500,
  height = 500,
}) {
  const style = {
    '--cell-size': `${cellSize}px`,
    '--line-color': lineColor,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div className="grid-background" style={style}>
      {children}
    </div>
  );
}
