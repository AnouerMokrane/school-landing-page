import HeadingSection from "../HeadingSection";

const StructureTable = () => {
  const programFeesData = [
    {
      program: "Nursery",
      ageGroup: "2 - 3 Years",
      annualTuition: "$1,686",
      registrationFee: "$162",
      activityFee: "$12",
    },
    {
      program: "Pre - Kindergartens",
      ageGroup: "3 - 4 Years",
      annualTuition: "$2,686",
      registrationFee: "$220",
      activityFee: "$16",
    },
    {
      program: "Kindergarten",
      ageGroup: "4 - 5 Years",
      annualTuition: "$3,686",
      registrationFee: "$340",
      activityFee: "$20",
    },
  ];

  const additionalServicesData = [
    { service: "Before and After-School Care", fee: "$120 / per month" },
    { service: "Language Immersion Program", fee: "$60 / per semester" },
    { service: "Transportation (optional)", fee: "$80 / per month" },
  ];
  return (
    <section className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Features"
        mainHeading="Free Structure"
        description="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
      />
      <div className="bg-white p-7 border-2 border-grey-10 rounded-lg shadow-shadow2 mt-14 overflow-y-auto md:p-10 custom-scrollbar">
        <table className="min-w-[1200px] bg-white border-collapse w-[900px] ">
          <thead>
            <tr>
              <th className="py-2 px-4 text-lg font-medium border border-grey-10 bg-orange-95 ">
                Program
              </th>
              <th className="py-2 px-4 text-lg font-medium border border-grey-10 bg-orange-95">
                Age Group
              </th>
              <th className="py-2 px-4 text-lg font-medium border border-grey-10 bg-orange-95">
                Annual Tuition
              </th>
              <th className="py-2 px-4 text-lg font-medium border border-grey-10 bg-orange-95">
                Registration Fee
              </th>
              <th className="py-2 px-4 text-lg font-medium border border-grey-10 bg-orange-95">
                Activity Fee
              </th>
            </tr>
          </thead>
          <tbody className="before:block before:mt-6">
            {programFeesData.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border border-grey-10">
                  {item.program}
                </td>
                <td className="py-2 px-4 border border-grey-10">
                  {item.ageGroup}
                </td>
                <td className="py-3 px-4 border border-grey-10">
                  {item.annualTuition}
                </td>
                <td className="py-3 px-4 border border-grey-10">
                  {item.registrationFee}
                </td>
                <td className="py-3 px-4 border border-grey-10">
                  {item.activityFee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-7 border-2 border-grey-10 rounded-lg shadow-shadow2 mt-10 overflow-y-auto md:p-10 custom-scrollbar">
        <div className="p-4 bg-orange-95 border border-grey-10 rounded-lg">
          <h3 className="text-lg font-bold font-Raleway ">
            Additional Services
          </h3>
        </div>
        <table className="min-w-[1190px] bg-white mt-6 ">
          <tbody className="">
            {additionalServicesData.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border border-grey-10 w-1/2">
                  {item.service}
                </td>
                <td className="py-3 px-4 border border-grey-10 w-1/2">
                  {item.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StructureTable;
