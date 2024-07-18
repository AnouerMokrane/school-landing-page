import OverviewSection from "@/components/shared/OverviewSection";
import EventsSection from "@/components/shared/StudentLifePage/EventsSection";
import ExtracurricularActivities from "@/components/shared/StudentLifePage/ExtracurricularActivities";
import StudentSupport from "@/components/shared/StudentLifePage/StudentSupport";

const StudentLifePage = () => {
  return (
    <>
      <OverviewSection
        smallText="Enriching Student Life"
        heading="Embracing Learning with Discovery and Joy"
        text="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
      />
      <ExtracurricularActivities />
      <EventsSection />
      <StudentSupport />
    </>
  );
};

export default StudentLifePage;
