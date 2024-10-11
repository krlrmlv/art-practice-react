import { useCallback, useEffect, useState } from "react";
import Portal from "../Portal";
import styles from "./Modal.module.scss";
import cn from "classnames";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Modal({
  onClose, // Функция закрытия
  children, // Дочерние элементы
  shown = false, // Показан ли попап в данный момент
  className, // Дополнительный класс для общей обёртки
  contentClassName, // Дополнительный класс для обёртки контента
  id, // уникальный идентификатор
}) {
  const [isOpen, setIsOpen] = useState(shown);

  const [searchParams] = useSearchParams(); // searchParams - получение параметров, setSearchParams - вставка параметров

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      if (searchParams.get("popup") === id) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, [id, searchParams]);

  useEffect(() => {
    setIsOpen(shown);

    return () => {
      setIsOpen(false);
    };
  }, [shown]);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  }, [onClose, navigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return isOpen ? (
    <Portal>
      <div className={cn(styles.root, className)}>
        <div onClick={handleClose} className={styles.backdrop}></div>
        <div className={cn(styles.content, contentClassName)}>
          <>
            <button onClick={handleClose}>x</button>
            {children}
          </>
        </div>
      </div>
    </Portal>
  ) : null;
}
