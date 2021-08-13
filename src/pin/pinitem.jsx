import React from "react";
import PropTypes from "prop-types";
const PinItem = React.forwardRef((props, ref) => {
  const handleKeyUp = (e) => {
    switch (e.code) {
      case "Backspace": {
        props.handleBackspace(e.target.value);
        break;
      }
      case "ShiftLeft":
      case "Tab":
      case "ArrowRight":
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
        break;
      default: {
        props.handleChange(e.target.value);
      }
    }
  };
  return (
    <input
      ref={ref}
      style={{
        width: "1rem",
        height: "1.25rem",
        padding: "0.25rem",
        margin: "0.25rem"
      }}
      onKeyUp={handleKeyUp}
      maxLength={props.maxLength}
    />
  );
});

PinItem.propTypes = {
  maxLength: PropTypes.number
};

PinItem.defaultProps = {
  maxLength: 1
};

export default PinItem;
