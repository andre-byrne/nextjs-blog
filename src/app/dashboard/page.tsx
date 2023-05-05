import { Content } from "../Grid";
import { Greeting } from "./Greeting";
import { UpcomingTrips } from "./UpcomingTrips";

export default function Page() {
  return (
    <Content>
      <Greeting/>
      <UpcomingTrips />
    </Content>
  );
}