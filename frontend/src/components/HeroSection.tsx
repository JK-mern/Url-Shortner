import axios from "axios";
import { copy } from "clipboard";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader";

function HeroSection() {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  console.log(url);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await axios.post(
      "http://localhost:5000/api/controller/shortner/create",
      { originalLink: url }
    );
    setShortUrl(res.data.url);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleCopyClick = () => {
    copy(shortUrl);
    toast.success("Copied");
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <Loader />
      ) : (
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
              {shortUrl && (
                <div className="">
                  <div className="flex items-center justify-center ">
                    <input
                      type="text"
                      className="w-40 md:w-[300px] bg-blue-200 py-3  rounded-l-lg text-black pl-5"
                      value={shortUrl}
                      disabled
                      readOnly
                    />
                    <button
                      onClick={handleCopyClick}
                      className="btn btn-primary py-1 px-2 md:px-5 rounded-r-lg h-full text-white "
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
              <p className="py-6 text-lg text-justify">
                SimpleShortner is a free tool to shorten URLs and generate short
                links URL shortener allows to create a shortened link making it
                easy to share
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
