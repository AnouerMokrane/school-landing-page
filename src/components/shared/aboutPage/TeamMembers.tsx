import { teamMemebers } from "@/data/constants";
import HeadingSection from "../HeadingSection";
import TeamCard from "../TeamCard";

const TeamMembers = () => {
  return (
    <section id="team" className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Teachers With Experties"
        mainHeading="Our Team Members"
        description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />
      <div className="grid gap-8 mt-12 lg:grid-cols-2 lg:gap-10">
        {teamMemebers.map((data, index) => (
          <TeamCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
