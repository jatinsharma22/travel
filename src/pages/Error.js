import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from '../components/Banner'

const Error = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  let location = useLocation();
  const pageSlug = location.pathname;
  const pageHead = "Page Not Found";

  
  return (
    <>
      <Banner pageHead={pageHead} pageSlug={pageSlug} />
      <div className="py-6"></div>
    </>
  )
}

export default Error