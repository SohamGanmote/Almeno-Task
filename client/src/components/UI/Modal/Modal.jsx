import styles from "./Modal.module.css";
const Modal = ({ isVisible, onClose, children }) => {
  return (
    <>
      {isVisible && (
        <>
          <div className={styles.backDrop} onClick={onClose} />
          <div className={styles.modal}>{children}</div>
        </>
      )}
    </>
  );
};
export default Modal;
