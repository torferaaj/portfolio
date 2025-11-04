import { useEffect, useRef, useState } from 'react';

const BubbleCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursorTransform = () => {
      if (!cursor) return;
      const { x, y } = positionRef.current;
      let scale = 1;
      
      if (isClicking) {
        scale = 0.8;
      } else if (isHovering) {
        scale = 1.5;
      }
      
      cursor.style.transform = `translate(${x - 10}px, ${y - 10}px) scale(${scale})`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      updateCursorTransform();

      // Create trail effect more frequently for visibility
      if (Math.random() > 0.7) {
        createTrail(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const createTrail = (x: number, y: number) => {
      const trail = document.createElement('div');
      trail.className = 'bubble-trail';
      
      // Random offset for scattered effect (-20 to +20 pixels)
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
      const randomSize = 4 + Math.random() * 8; // Random size between 4px and 12px
      
      // Random drift direction for animation
      const driftX = (Math.random() - 0.5) * 30;
      const driftY = -15 + (Math.random() - 0.5) * 20;
      
      trail.style.width = `${randomSize}px`;
      trail.style.height = `${randomSize}px`;
      trail.style.left = `${x + offsetX - randomSize/2}px`;
      trail.style.top = `${y + offsetY - randomSize/2}px`;
      trail.style.setProperty('--drift-x', `${driftX}px`);
      trail.style.setProperty('--drift-y', `${driftY}px`);
      
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 800);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isClicking, isHovering]);

  return (
    <div
      ref={cursorRef}
      className={`bubble-cursor ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
    />
  );
};

export default BubbleCursor;
