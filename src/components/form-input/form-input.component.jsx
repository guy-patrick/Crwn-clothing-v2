import "./form-input.styles.scss";

function FormInput({ label, onChangeHandler, ...otherProps }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={onChangeHandler}
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
