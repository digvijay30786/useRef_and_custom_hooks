import { useRef, useEffect } from "react";
import PinItem from "./pinitem";
export default function Pin(props) {
  const { length, perBox, onChange } = props;
  const elements = useRef(new Array(length).fill(""));
  const values = useRef(new Array(length).fill(""));

  const handleRefCallback = (item, index) => {
    elements.current[index] = item;
  };

  const handleChange = (value, index) => {
    values.current[index] = value;
    if (value.length === perBox && index < length - 1) {
      elements.current[index + 1].focus();
    }
    onChange(values.current.join(""));
  };

  const handleBackspace = (value, index) => {
    // write code here
    values.current[index] = value;
    if (value.length === 0 && index > 0) {
      elements.current[index - 1].focus();
    }
    onChange(values.current.join(""));
  };

  useEffect(() => {
    if (elements.current && elements.current.length !== 0) {
      elements.current[0].focus();
    }
  }, []);
  //console.log(elements);

  const handlePaste = (e) => {
    // THIS WILL ONLY WORK FOR 1 PER BOX
    e.preventDefault();
    values.current = values.current.map((a, i) => {
      elements.current[i].value = "";
      return "";
    });
    const val = e.clipboardData
      .getData("text")
      .split("")
      .filter((a, i) => i < length * perBox);

    val.forEach((value, i) => {
      values.current[i] = value;
      elements.current[i].value = value;
      if (i < length - 1) {
        elements.current[i + 1].focus();
      }
    });
  };

  return (
    <div onPaste={handlePaste}>
      {elements.current.map((item, index) => (
        <PinItem
          ref={(n) => handleRefCallback(n, index)}
          maxLength={perBox}
          key={index}
          handleChange={(value) => handleChange(value, index)}
          handleBackspace={(value) => handleBackspace(value, index)}
        />
      ))}
    </div>
  );
}
