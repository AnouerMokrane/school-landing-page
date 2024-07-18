import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import ContactForm from "@/components/shared/contact/ContactForm";
const ContactPage = () => {
  return (
    <>
      <section className="relative flex border-2 border-grey-10 rounded-lg shadow-shadow2 p-10 bg-white md:p-20">
        <img
          src="./assets/overview-shape.png"
          alt=""
          className="absolute top-0 left-0 max-sm:w-[100px] "
        />
        <div className="flex flex-col justify-between items-center text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <div className="w-fit p-1.5 px-3 font-medium border-2 border-grey-10 bg-white rounded-md max-lg:mx-auto ">
              Contact Us
            </div>
            <h1 className="text-[28px] text-grey-10 font-bold md:text-[38px]">
              Feel Free To Connect With Us
            </h1>
          </div>
          <div className="flex-1 max-lg:mt-2">
            <p className=" leading-relaxed">
              We value open communication and are eager to assist you with any
              inquiries. Feel free to reach out to us through any of the
              following contact methods
            </p>
            <ul className="grid gap-4 mt-6 xl:grid-cols-2">
              <li className="flex items-center gap-2 font-medium bg-orange-99 p-4 border-2 border-grey-10 rounded-md">
                <div className="w-8 h-8 flex justify-center items-center text-lg text-grey-15 border-2 border-grey-10 bg-orange-97 rounded-md">
                  <IoMdMail />
                </div>
                hello@littlelearners.com
              </li>
              <li className="flex items-center gap-1 bg-orange-99 p-4 border-2 border-grey-10 rounded-md">
                <div className="w-8 h-8 flex justify-center items-center text-grey-15 border-2 border-grey-10 bg-orange-97 rounded-md">
                  <FaPhoneAlt />
                </div>
                +91 91813 23 2309
              </li>
              <li className="flex items-center gap-1 bg-orange-99 p-4 border-2 border-grey-10 rounded-md">
                <div className="w-8 h-8 flex justify-center items-center text-grey-15 border-2 border-grey-10 bg-orange-97 rounded-md">
                  <MdLocationOn />
                </div>
                Somewhere in the World
              </li>
              <li className="flex items-center gap-1 bg-orange-99 p-4 border-2 border-grey-10 rounded-md">
                <div className="w-8 h-8 flex justify-center items-center text-grey-15 border-2 border-grey-10 bg-orange-97 rounded-md">
                  <IoTimeSharp />
                </div>
                Office Hours - 9am - 6 pm
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default ContactPage;
