import { CSSProperties } from "react";
import { Greeting } from "./Greeting";
import { UpcomingTrips } from "./UpcomingTrips";

const style: CSSProperties = {
  gridColumnStart: "3",
  gridColumnEnd: "span 8",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

// `app/page.js` is the UI for the root `/` URL
export default function Page() {
  return (
    <div>
      <Greeting/>
      <UpcomingTrips />
    </div>
  );
}