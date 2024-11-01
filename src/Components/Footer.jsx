import logo from "../assets/logo-footer.png";
import { useState } from "react";
import { addToLocalStorage } from "./js/localstorage.js";


const Footer = ({ Toast }) => {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    console.log(email);
    Toast("Thank you for subscribing! We'll keep you updated.", "success");
    addToLocalStorage(email);
    setEmail("");
  };
  return (
    <div className="bg-[#06091A] pt-40">
      <div className="container mx-auto p-20">
        <div className="w-fit mx-auto">
          <img src={logo} alt="" className="w-fit h-fit mb-14" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white pb-10 border-b-2 border-[#9f969666]">
          <div className="lg:w-3/4 space-y-2 text-center md:text-left mb-3 md:mb-0">
            <h2 className="font-semibold text-lg">About Us</h2>
            <p className="text-[#FFFFFF99]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left mb-3 md:mb-0">
            <h2 className="font-semibold text-lg">Quick Links</h2>
            <ul className="text-[#FFFFFF99] md:list-disc ml-5 space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-3 text-center md:text-left mb-3 md:mb-0">
            <h2 className="font-semibold text-lg">Subscribe</h2>
            <p className="text-[#FFFFFF99] lg:w-3/4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter your email"
                className="p-2 pl-4 text-[#13131366] rounded-xl md:rounded-l-xl"
              />
              <button
                onClick={handleSubscribe}
                className="w-full px-3 py-2 rounded-xl md:rounded-r-xl font-bold bg-gradient-to-r from-sky-400 to bg-yellow-400 text-black"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-center text-[#FFFFFF99] my-10">
          @2024 Your Company All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};


export default Footer;