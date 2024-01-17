import styles from "./Button.module.css";
const Button = ({ onClick, label, className, props }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${className}`}>
      {label}
    </button>
  );
};
export default Button;
