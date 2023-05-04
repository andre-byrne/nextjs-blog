import { CSSProperties } from "react";
import { Greeting } from "./Greeting";

const style: CSSProperties = {
  gridColumnStart: "3",
  gridColumnEnd: "span 8",
  display: "flex",
  justifyContent: "center",
};

// `app/page.js` is the UI for the root `/` URL
export default function Page() {
  return (
    <div style={style}>
      <Greeting/>
    </div>
  );
}