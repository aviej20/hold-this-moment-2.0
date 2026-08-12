export default Button;

function Button({ label, classList = [], clickFunction, type, disabled }) {
  return (
    <button
      className={`btn ${classList.join(" ")}`}
      type={type}
      onClick={clickFunction}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
