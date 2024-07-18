import { faqs } from "@/data/constants";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`h-fit border  border-grey-10 bg-orange-95 rounded-lg overflow-hidden duration-300 ${
            activeIndex === index && "bg-white"
          }`}
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <h3 className="font-semibold">{faq.question}</h3>
            <div className="flex-1 flex justify-center items-center min-w-8 max-w-8 w-8 h-8 border border-grey-10 rounded-sm">
              {activeIndex === index ? (
                <Minus className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </div>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 border-t">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
