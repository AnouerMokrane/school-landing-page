import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../ui/button";
import HeadingSection from "../HeadingSection";

const ContactForm = () => {
  return (
    <section className="mt-20 md:mt-28">
      <HeadingSection
        topText="Contact Form"
        mainHeading="Student Information"
        description="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
      />
      <div className="p-8 bg-white border-2 border-grey-10 rounded-md shadow-shadow2 mt-16 md:p-20">
        <ul className="flex justify-center gap-4 -mt-14 md:-mt-28">
          <li>
            <a
              href="#"
              className="w-16 h-16 flex justify-center items-center text-3xl text-grey-15 border-2 border-grey-10 bg-orange-90 rounded-md"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-16 h-16 flex justify-center items-center text-3xl text-grey-15 border-2 border-grey-10 bg-orange-90 rounded-md"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-16 h-16 flex justify-center items-center text-3xl text-grey-15 border-2 border-grey-10 bg-orange-90 rounded-md"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <form className="grid gap-7 mt-10 md:grid-cols-2">
          <div>
            <label className="text-xl text-grey-30 font-semibold">
              Parent Name
            </label>
            <Input
              placeholder="Enter Parent Name"
              className="text-grey-35 font-medium py-7 px-5 mt-2 border-2 border-grey-10"
            />
          </div>
          <div>
            <label className="text-xl text-grey-30 font-semibold">
              Email Address
            </label>
            <Input
              placeholder="Enter Email Address"
              className="text-grey-35 font-medium py-7 px-5 mt-2 border-2 border-grey-10"
            />
          </div>
          <div>
            <label className="text-xl text-grey-30 font-semibold">
              Phone Number
            </label>
            <Input
              placeholder="Enter Phone Number"
              className="text-grey-35 font-medium py-7 px-5 mt-2 border-2 border-grey-10"
            />
          </div>
          <div>
            <label className="text-xl text-grey-30 font-semibold">
              Student Name
            </label>
            <Input
              placeholder="Enter Student Name"
              className="text-grey-35 font-medium py-7 px-5 mt-2 border-2 border-grey-10"
            />
          </div>
          <div>
            <label className="text-xl text-grey-30 font-semibold">
              Student Age
            </label>
            <Input
              placeholder="Enter Student Age"
              className="text-grey-35 font-medium py-7 px-5 mt-2 border-2 border-grey-10"
            />
          </div>
          <div>
            <label className="text-xl text-grey-30 font-semibold">
              Program of Intrest
            </label>
            <Select>
              <SelectTrigger className="text-grey-35 font-medium py-7 px-5 mt-2 border-2 border-grey-10">
                <SelectValue placeholder="Select a Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academics">Academics</SelectItem>
                <SelectItem value="language-immersion">
                  Language Immersion
                </SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className=" md:col-span-2">
            <label className="text-xl text-grey-30 font-semibold">
              Message
            </label>
            <Textarea
              placeholder="Enter Student Age"
              className="text-grey-35 font-medium py-5 px-5 mt-2 border-2 border-grey-10 min-h-36"
            />
          </div>
          <Button className="py-7 text-lg font-medium text-grey-15 bg-orange-75 border-2 border-grey-10 md:col-span-2 hover:bg-orange-80">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
