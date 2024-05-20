import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ pageHead, pageSlug }) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <>
      <div className="relative bg-[url('../images/aboutBanner.jpg')] bg-cover bg-no-repeat px-5 text-center inner_banner after:absolute after:w-full after:content-[''] after:h-full after:bg-black after:left-0 after:top-0 after:right-0 after:bottom-0 after:opacity-40">
        <div className="z-50 relative max-w-[920px] mx-auto">
          <p className="text-xl font-light text-white tracking-wider mb-3">
            UNLOCKING THE WORLD
          </p>
          <h1 className="xl:text-[50px] sm:text-4xl xs:text-3xl text-xl xl:leading-none font-bold text-white">
            {pageHead}
          </h1>
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
