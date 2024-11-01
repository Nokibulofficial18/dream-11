import {addToLocalStorage} from "./js/localstorage.js"
import "./css/Subscribe.css";
import { useState } from "react";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubscribe = () => {
    toast.success("Thank you for subscribing! It means a lot to us We'll keep you updated.");
    addToLocalStorage(email);
    setEmail("");
  };
  return (
    <div className="container mx-auto md:p-6">
      <div className="relative">
        <div className="w-full absolute -top-40 z-10   p-8 rounded-2xl">
          <div className="w-full p-6 text-center md:p-24 lg:p-28 border-4 bg-gray-200 border-white rounded-2xl  subscribe-bg flex flex-col gap-5 justify-center items-center">
            <h1 className="font-bold text-xl lg:text-3xl">
              Subscribe to our Newsletter
            </h1>
            <h3 className="font-medium text-lg lg:text-xl text-[#131313B3]">
              Get the latest updates and news right in your inbox!
            </h3>
            <div className="flex justify-center flex-col md:flex-row md:space-x-2">
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter your email"
                className="text-black border-2 border-[#13131366] mb-3 md:mb-0 mx-auto pl-4 p-2 rounded-lg"
              />
              <button
                onClick={handleSubscribe}
                className="font-bold px-4 py-2 bg-gradient-to-r from-sky-400 to bg-yellow-400 rounded-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Subscribe;