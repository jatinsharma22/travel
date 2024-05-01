import React from "react";

import { IoNavigate } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const TourPlans = ({element, key}) => {
  return (
    <>
   
          <div className="px-3" key={key}>
            <a href={element.link} className="destination_card shadow_custom">
              <div className="overflow-hidden relative">
                <img src={element.image} alt="" className="w-full" />
                {element.discount && (
                  <div className="discound absolute">{element.discount}</div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="mb-0 text-xl">{element.title}</h3>
                  <span className="text-sm bg-yellow flex items-center m-0">
                    <FaStar className="me-1 text-warning" />
                    {element.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="fw-medium text-dark text-xl">
                    {element.price}
                  </span>
                  <div className="flex items-center">
                    <IoNavigate className="text-dark me-2" />
                    <span className="fs-0 fw-medium">{element.days}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
      
    </>
  );
};

export default TourPlans;
