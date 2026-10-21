import { Timeline } from "../components/Timeline";
import { timelineJourney } from "../constants";

const Experiences = () => {
  return (
    <section className="w-full">
      <Timeline data={timelineJourney} />
    </section>
  );
};

export default Experiences;
