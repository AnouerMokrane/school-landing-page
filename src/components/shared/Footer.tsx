import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TiLocation } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mx-4 mt-20 px-6 py-12 bg-white border-2 border-grey-10 rounded-md shadow-shadow2 md:mx-12 md:mb-4">
      <div className="flex flex-col gap-10 md:flex md:flex-row lg:gap-20">
        <div className="">
          {" "}
          <div className="text-center max-w-[400px] md:text-left">
            <img
              src="./assets/Logo.png"
              alt="little learners"
              className=" max-md:mx-auto"
            />
            <p className="text-grey-30 font-medium mt-4">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex items-center gap-2 ">
              <div className="w-8 h-8 flex  justify-center items-center bg-orange-97 border-2 border-grey-10 rounded-md">
                <MdEmail />
              </div>
              <p className=" font-medium">hello@littlelearners.com</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex  justify-center items-center bg-orange-97 border-2 border-grey-10 rounded-md">
                <FaPhone />
              </div>
              <p className=" font-medium">+91 91813 23 2309</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex  justify-center items-center bg-orange-97 border-2 border-grey-10 rounded-md">
                <TiLocation />
              </div>
              <p className=" font-medium">Somewhere in the World</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-14 mt-10 md:grid-cols-4 md:m-0">
          <div className=" max-sm:order-1">
            <h4 className="font-semibold mb-4">Home</h4>
            <ul className=" space-y-3">
              <li>
                <a href="#featues" className="font-medium text-grey-20">
                  Features
                </a>
              </li>
              <li>
                <a href={"#testimonials"} className="font-medium text-grey-20">
                  Our Testimonials
                </a>
              </li>
              <li>
                <a href={"#faq"} className="font-medium text-grey-20">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className=" max-sm:order-3">
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className=" space-y-3">
              <li>
                <a href={"#mission"} className="font-medium text-grey-20">
                  Our Mission
                </a>
              </li>
              <li>
                <a href={"#mission"} className="font-medium text-grey-20">
                  Our Vission
                </a>
              </li>
              <li>
                <a href={"#awards"} className="font-medium text-grey-20">
                  Awards and Recognitions
                </a>
              </li>
              <li>
                <a href={"#history"} className="font-medium text-grey-20">
                  History
                </a>
              </li>
              <li>
                <a href={"#team"} className="font-medium text-grey-20">
                  Teachers
                </a>
              </li>
            </ul>
          </div>
          <div className="max-sm:order-2">
            <h4 className="font-semibold mb-4">Academics</h4>
            <ul className=" space-y-3">
              <li>
                <a
                  href="#special-features"
                  className="font-medium text-grey-20"
                >
                  Special Features
                </a>
              </li>
              <li>
                <a href="#gallery" className="font-medium text-grey-20">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className="max-sm:order-4">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className=" space-y-3">
              <li>
                <Link to={"/"} className="font-medium text-grey-20">
                  Information
                </Link>
              </li>
              <li>
                <Link to={"/"} className="font-medium text-grey-20">
                  Map & Direction
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-between items-center py-6 border-y border-grey-15 mt-9 md:flex-row">
        <div className="flex">
          <p className="text-grey-20 font-medium pr-1 text-sm md:pr-4">
            Terms of Service
          </p>
          <p className="text-grey-20 font-medium px-2 border-x-2 border-grey-15 text-sm md:px-4">
            Privacy Policy
          </p>
          <p className="text-grey-20 font-medium pl-1 text-sm md:pl-4">
            Cookie Policy
          </p>
        </div>
        <ul className="flex gap-3">
          <li>
            <a
              href="#"
              className="w-12 h-12 flex justify-center items-center bg-orange-90 border-2 border-grey-15 rounded-md"
            >
              <FaFacebook className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-12 h-12 flex justify-center items-center bg-orange-90 border-2 border-grey-15 rounded-md"
            >
              <FaXTwitter className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-12 h-12 flex justify-center items-center bg-orange-90 border-2 border-grey-15 rounded-md"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-sm font-medium text-grey-40 mt-6 md:text-base">
        Copyright &copy; [2024] Little Learners Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
