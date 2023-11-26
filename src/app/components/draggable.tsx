import React, { useRef, useState } from "react";
import styles from "./draggable.module.css";
import classNames from "classnames";

interface DraggableProps {
  children: number;
  // activeDragId: number | null;
  onDrag: (srcRef: any) => void;
  onDrop: (targetRef: any, e: any) => void;
}

export function Draggable({ children, onDrag, onDrop }: DraggableProps) {
  const ref = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  function handleDragStart(e: any) {
    const elem = ref.current as any;

    if (elem) {
      elem.style.opacity = 0.4;

      onDrag(elem);

      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", children);
    }
  }

  function handleDragEnd(e: any) {
    const elem = ref.current as any;

    if (elem) {
      elem.style.opacity = 1;
    }
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    return false;
  }

  function handleDragEnter(e: any) {
    setIsDragOver(true);
  }

  function handleDragLeave(e: any) {
    setIsDragOver(false);
  }

  function handleDrop(e: any) {
    e.stopPropagation(); // stops the browser from redirecting.

    onDrop(ref.current, e);
    return false;
  }

  return (
    <div
      ref={ref}
      draggable
      className={classNames(styles.root, { [styles.over]: isDragOver })}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
}
