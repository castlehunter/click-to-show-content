import { useState } from "react";

function ParentComponent() {
  const [text, setText] = useState(null);

  return (
    <div>
      <InputComponent onInput={setText} />
      <DisplayComponent text={text} />
    </div>
  );
}

function InputComponent({ onInput }) {
  return (
    <div>
      <input type="text" onChange={(e) => onInput(e.target.value)}></input>
    </div>
  );
}

function DisplayComponent({ text }) {
  return (
    <div>
      <p>Display the input text: {text}</p>
    </div>
  );
}
export default ParentComponent;
