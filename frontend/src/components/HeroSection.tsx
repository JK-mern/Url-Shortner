import axios from "axios";
import React, { useRef, useState } from "react";

function HeroSection() {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("www.google.com");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  console.log(url);

  const handleSubmit = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/controller/shortner/create",
      { originalLink: url }
    );
    setShortUrl(res.data.url);
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
          {shortUrl && (
            <div className="inline-flex items-center gap-x-3 border">
              <div
                id="hs-clipboard-basic"
                className="text-md p-3  font-medium text-gray-800 "
              >
               {shortUrl}
              </div>

              <button
                type="button"
                className="js-clipboard-example p-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-clipboard-target="#hs-clipboard-basic"
                data-clipboard-action="copy"
                data-clipboard-success-text="Copied"
              >
                <svg
                  className="js-clipboard-default size-4 group-hover:rotate-6 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                </svg>

                <svg
                  className="js-clipboard-success hidden size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>
            </div>
          )}

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
