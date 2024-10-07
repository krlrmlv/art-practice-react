import { useEffect } from "react";
import Portal from "../Portal";
import styles from "./Modal.module.scss";
import cn from "classnames";

export default function Modal({
  onClose, // Функция закрытия
  children, // Дочерние элементы
  shown = false, // Показан ли попап в данный момент
  className, // Дополнительный класс для общей обёртки
  contentClassName, // Дополнительный класс для обёртки контента
}) {
  const handleClose = () => {
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return shown ? (
    <Portal>
      <div className={cn(styles.root, className)}>
        <div onClick={handleClose} className={styles.backdrop}></div>
        <div className={cn(styles.content, contentClassName)}>{children}</div>
      </div>
    </Portal>
  ) : null;
}
