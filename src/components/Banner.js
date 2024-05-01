import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ pageHead, pageSlug }) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <>
      <div className="relative bg-[url('../images/aboutBanner.jpg')] bg-cover bg-no-repeat px-5 text-center py-72 after:absolute after:w-full after:content-[''] after:h-full after:bg-black after:left-0 after:top-0 after:right-0 after:bottom-0 after:opacity-40">
        <div className="z-50 relative max-w-[920px] mx-auto">
          <p className="text-2xl font-light text-white tracking-wider">
            UNLOCKING THE WORLD
          </p>
          <h1 className="text-[50px] font-bold text-white">{pageHead}</h1>
          {pageSlug && (
            <Link className="btn fs-5 mt-10" to="/">
              Home
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
