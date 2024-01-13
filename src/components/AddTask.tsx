import { useState } from "react";

interface aTask {
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback: (text: string) => void;
}
export default function AddTask({ callback }: aTask) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          callback(text);
        }}
      >
        Add
      </button>
    </>
  );
}
