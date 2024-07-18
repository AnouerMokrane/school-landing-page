import { admissionProcessData } from "@/data/constants";
import HeadingSection from "../HeadingSection";

const AdmissionProcess = () => {
  return (
    <section className="mt-20 md:mt-28">
      <HeadingSection
        topText="Process"
        mainHeading="Admission Process"
        description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
      />
      <div className="grid gap-40 mt-52 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 md:gap-x-10">
        {admissionProcessData.map((data) => (
          <div
            key={data.step}
            className="relative bg-white p-[30px] border-2 border-grey-10 rounded-md shadow-shadow2"
          >
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-fit text-4xl font-Raleway font-extrabold py-4 px-9 border-2 border-grey-10 rounded-md shadow-shadow2 md:left-12">
              {data.step}
              <div className="w-0.5 h-12 absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black shadow-[0px_2px_0px_5px_#FFBE99] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-5 before:h-5 before:border before:border-grey-10 before:bg-white before:rounded-full" />
            </div>
            <h3 className="text-[26px] text-grey-10 font-bold font-Raleway">
              {data.title}
            </h3>
            <p className="text-grey-30 font-medium mt-4">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionProcess;
