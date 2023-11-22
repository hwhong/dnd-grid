"use client";
import classNames from "classnames";
import styles from "./page.module.css";
import { useRef, useState } from "react";

export default function Home() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const eleRef = useRef(null);

  const onMouseDown = (e: any) => {
    setStart({ x: e.clientX, y: e.clientY });
    setIsMouseDown(true);
  };

  const onMouseMove = (e: any) => {
    if (!isMouseDown) {
      return;
    }

    const currX = e.clientX;
    const currY = e.clientY;

    setDelta({ x: currX - start.x, y: currY - start.y });
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        <div
          draggable
          ref={eleRef}
          className={classNames(styles.content, styles.gridItem)}
          // onDrag={onDrag}
          // onDragStart={onDragStart}
          style={{
            transform: `translate(${delta.x}px, ${delta.y}px)`,
          }}
          // onDragEnd={onDragEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          content
        </div>
      </div>
    </div>
  );
}

// use translate to position the items
// grid items have: position absolute, left: 0, top: 0
