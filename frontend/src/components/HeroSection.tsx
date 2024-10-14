import axios from "axios";
import React, { useState } from "react";

function HeroSection() {
  const [url, setUrl] = useState<string>("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  console.log(url);

  const handleSubmit = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/controller/shortner/create",
      { originalLink: url }
    );
    console.log(res);
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <div className="my-4 flex items-center   ">
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Copy the URL Here"
              className="py-5 px-7 w-60 md:w-[700px] placeholder:text-left  placeholder:text-black focus:outline-none border border-gray-300 rounded-l-lg bg-slate-200 text-black"
            />
            <button
              onClick={handleSubmit}
              className="btn btn-primary py-6 px-5 md:px-7 rounded-r-lg h-full text-white "
            >
              Shorten URL
            </button>
          </div>

          <p className="py-6 text-lg text-justify">
            SimpleShortner is a free tool to shorten URLs and generate short
            links URL shortener allows to create a shortened link making it easy
            to share
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
