import AdmissionProcess from "@/components/shared/admissionsPage/AdmissionProcess";
import StructureTable from "@/components/shared/admissionsPage/StructureTable";
import OverviewSection from "@/components/shared/OverviewSection";

const AdmissionsPage = () => {
  return (
    <>
      <OverviewSection
        smallText="Admission"
        heading="Join Our Family of Young Learners"
        text="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <AdmissionProcess />
      <StructureTable />
    </>
  );
};

export default AdmissionsPage;
