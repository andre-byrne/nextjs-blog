import { Greeting } from "./Greeting";
import { UpcomingTrips } from "./UpcomingTrips";

// `app/page.js` is the UI for the root `/` URL
export default function Page() {
  return (
    <>
      <Greeting/>
      <UpcomingTrips />
    </>
  );
}