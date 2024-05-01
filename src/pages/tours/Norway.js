import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCar, FaRegStar, FaStar } from "react-icons/fa";
import { LiaParachuteBoxSolid } from "react-icons/lia";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { IoMapOutline, IoPersonAddOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { MdHotel } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

const Norway = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <Row className="g-0 m-0">
        <Col md={6}>
          <img src="../images/norway2.jpg" className="w-full" />
        </Col>
        <Col md={6} className="ps-1 pe-1">
          <Row className="g-1">
            <Col md={6}>
              <img src="../images/norway6.jpg" className="w-full" />
            </Col>
            <Col md={6}>
              <img src="../images/norway3.jpg" className="w-full" />
            </Col>
            <Col md={6}>
              <img src="../images/norway5.jpg" className="w-full h-full" />
            </Col>
            <Col md={6}>
              <img src="../images/norway4.jpg" className="w-full" />
            </Col>
          </Row>
        </Col>
      </Row>

      <section className="py-4 py-sm-5">
        <Container>
          <div className="flex flex-wrap justify-between pb-8 pt-6 mb-8 border-b border-stock-1">
            <div className="">
              <h1 className="fs-2 mb-3">
                Norway in a Nutshell with FREE Fjord Cruise Ride
              </h1>
              <div className="flex text-primary-1 mr-3 text-sm">
                <FaStar className="me-1 text-warning" />
                <FaStar className="me-1 text-warning" />
                <FaStar className="me-1 text-warning" />
                <FaStar className="me-1 text-warning" />
                <FaRegStar className="me-1 text-warning" />
              </div>
            </div>
            <div className="">
              <del>INR 2,13,030</del>
              <h2 className="lg:text-[35px] leading-1.2 md:text-xl font-semibold mb-3">
                INR 1,57,800
              </h2>
              <div className="text-md font-normal ml-1">Per Person</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-base gap-6">
            <div className="lg:col-span-8 col-span-12">
              <h3 className="lg:text-2xl text-xl text-black font-medium leading-[1.5] mb-6">
                Trip Highlights
              </h3>
              <ul className="flex items-center gap-4 text-black mb-8">
                <li className="pe-4 border-r border-zinc-400 flex items-center">
                  <LuClock className="mr-2" /> 8 Days / 7 Night
                </li>
                <li className="pe-4 border-r border-zinc-400 flex items-center">
                  {" "}
                  <IoPersonAddOutline className="mr-2" /> Max People : 10
                </li>
                <li className="pe-4 flex items-center">
                  <IoMapOutline className="mr-2" /> North Transylvania
                </li>
              </ul>

              <ul>
                <li className="mb-4 flex">
                  <IoMdCheckmark className="w-5 text-teal-600 mt-1.5 mr-2" />{" "}
                  Enjoy the calming surroundings and views of the Norwegian
                  fjords while relaxing on a cruise from Bergen.
                </li>
                <li className="mb-4 flex">
                  <IoMdCheckmark className="w-5 text-teal-600 mt-1.5 mr-2" />{" "}
                  Travel to Oslo and delve into the Norwegian capital's
                  treasures, visiting iconic landmarks.
                </li>
                <li className="mb-4 flex">
                  <IoMdCheckmark className="w-5 text-teal-600 mt-1.5 mr-2" /> Go
                  on a scenic cruise through Norway's breathtaking fjords,
                  beautifying the majestic landscapes, cascading waterfalls, and
                  towering cliffs.
                </li>
                <li className="mb-4 flex">
                  <IoMdCheckmark className="w-5 text-teal-600 mt-1.5 mr-2" />{" "}
                  Explore Bergen's charming streets, colorful wooden houses, and
                  bustling markets.
                </li>
              </ul>

              <ul className="mt-base mt-8">
                <li className="lg:flex lg:pt-6 py-6 lg:pb-6 border-t border-stock-1 last:border-b">
                  <div className="lg:w-1/3 lg:text-2md text-md text-black font-medium">
                    Price Includes
                  </div>
                  <div className="lg:w-2/3 lg:mt-0">
                    <ul className="lg:grid flex flex-wrap grid-cols-2 lg:gap-y-5 gap-y-3 gap-x-3">
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Transfer Included</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Stay Included</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Breakfast Included</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 text-md mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Sightseeing Included</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="lg:pt-10 pt-8">
                <h3 className="text-2xl mb-3">Tour Plan</h3>

                <div>
                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        01
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 01 : Arrival in Oslo
                      </h5>
                      <p>
                        Upon arrival at the Oslo airport, you will get
                        transferred to your hotel. Check-in and spend the rest
                        of the day at leisure. You can visit the Norwegian
                        Museum of Cultural History, or explore the local
                        markets. Later, return to the hotel for an overnight
                        stay.
                      </p>
                      <ul className="lg:grid flex flex-wrap grid-cols-3 lg:gap-y-5 gap-y-3 gap-x-3 bg-blue-100 rounded-md mb-3 p-3">
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdCheckmark className="text-teal-600" />
                          </div>
                          <span>Breakfast</span>
                        </li>
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdClose className="text-red-600" />
                          </div>
                          <span>Lunch</span>
                        </li>
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdClose className="text-red-600" />
                          </div>
                          <span>Dinner</span>
                        </li>
                      </ul>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Transfer:</strong> in Sedan
                        </p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <MdHotel />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Hotel:</strong> Check-In At Deluxe Hotel In
                          Oslo
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        02
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 02 : Oslo Fjord Cruise
                      </h5>
                      <p>
                        Begin your day by heading to the Oslo Cruise Port for
                        your Oslo Fjord Cruise. Enjoy your day by witnessing
                        amazing attractions on the cruise. After the fun-filled
                        tour, you will be transferred back to the port. From
                        there head back to the hotel on your own to have leisure
                        time, and overnight stay.
                      </p>
                      <ul className="lg:grid flex flex-wrap lg:gap-y-5 gap-y-3 gap-x-3 bg-blue-100 rounded-md mb-3 p-3">
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdCheckmark className="text-teal-600" />
                          </div>
                          <span>
                            Day Meals (Breakfast At Deluxe Hotel In Oslo)
                          </span>
                        </li>
                      </ul>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <LiaParachuteBoxSolid />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Activity:</strong> Oslo Fjord Cruise
                          Sightseeing On A Shared Basis
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        03
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 03: Flam
                      </h5>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3 mb-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>4 Transfers:</strong>
                        </p>
                      </div>
                      <ul className="flex flex-col gap-3 mb-4">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Deluxe hotel in Oslo to Oslo Central
                          Station
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Oslo Central Station to Myrdal Station
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Myrdal Station to Flam Station
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Flam Station to Hotel Flamsbrygga, Flam
                          in Flam
                        </li>
                      </ul>

                      <ul className="lg:grid flex flex-wrap lg:gap-y-5 gap-y-3 gap-x-3 bg-blue-100 rounded-md mb-3 p-3">
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdCheckmark className="text-teal-600" />
                          </div>
                          <span>
                            Day Meals (Breakfast At Deluxe Hotel In Oslo)
                          </span>
                        </li>
                      </ul>

                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <LiaParachuteBoxSolid />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Activity:</strong> Scenic Flam Train Ride on a
                          Shared basis
                        </p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <MdHotel />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Hotel:</strong> Check-in at Hotel Flamsbrygga,
                          Flam in Flam
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        04
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 04: Bergen
                      </h5>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3 mb-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>3 Transfers:</strong>
                        </p>
                      </div>
                      <ul className="flex flex-col gap-3 mb-4">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Flam to Gudvangen
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Gudvangen to Voss
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Voss to Bergen Train Station
                        </li>
                      </ul>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3 mb-3">
                        <span>
                          <LiaParachuteBoxSolid />
                        </span>
                        <p className="text-sm m-0">
                          <strong>2 Activities::</strong>
                        </p>
                      </div>
                      <ul className="flex flex-col gap-3 mb-4">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Scenic Cruise Ride from Flam to Gudvangen on a Shared
                          basis
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Scenic Train Ride to Bergen on a Shared basis
                        </li>
                      </ul>

                      <ul className="lg:grid flex flex-wrap lg:gap-y-5 gap-y-3 gap-x-3 bg-blue-100 rounded-md mb-3 p-3">
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdCheckmark className="text-teal-600" />
                          </div>
                          <span>Breakfast At Hotel Flamsbrygga, Flam</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        05
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 05: Bergen
                      </h5>

                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Transfer:</strong> Transfer from Bergen Train
                          Station to Deluxe hotel in Bergen
                        </p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <MdHotel />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Hotel:</strong> Check-in at Deluxe hotel in
                          Bergen
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        06
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 06: Bergen
                      </h5>

                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <LiaParachuteBoxSolid />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Activity:</strong> Bergen Fjord Cruise to
                          Alversund Streams on a Shared basis
                        </p>
                      </div>
                      <ul className="lg:grid flex flex-wrap lg:gap-y-5 gap-y-3 gap-x-3 bg-blue-100 rounded-md mb-3 p-3">
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdCheckmark className="text-teal-600" />
                          </div>
                          <span>Breakfast At Deluxe Hotel</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        07
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 07: Oslo
                      </h5>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3 mb-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>2 Transfers:</strong>
                        </p>
                      </div>
                      <ul className="flex flex-col gap-3 mb-4">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Deluxe hotel in Bergen to Bergen
                          Airport, Flesland
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Transfer from Oslo Airport, Gardermoen to Super Deluxe
                          hotel in Oslo
                        </li>
                      </ul>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3 mb-3">
                        <span>
                          <MdHotel />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Hotel:</strong> Check-in at Super Deluxe hotel
                          in Oslo
                        </p>
                      </div>
                      <ul className="lg:grid flex flex-wrap lg:gap-y-5 gap-y-3 gap-x-3 bg-blue-100 rounded-md mb-3 p-3">
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdCheckmark className="text-teal-600" />
                          </div>
                          <span>Breakfast At Deluxe Hotel</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        08
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 08: Oslo
                      </h5>

                      <div className="p-3 border-b border-gray-200  text-black flex gap-3 mb-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Transfer:</strong> Transfer from Super Deluxe
                          hotel in Oslo to Oslo Airport, Gardermoen
                        </p>
                      </div>
                      <ul className="lg:grid flex flex-wrap lg:gap-y-5 gap-y-3 gap-x-3 bg-blue-100 rounded-md mb-3 p-3">
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdCheckmark className="text-teal-600" />
                          </div>
                          <span>Breakfast At Super Deluxe Hotel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-xl mb-4">
                  What's inside the package?
                </h4>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                          Inclusions
                        </th>
                        <th></th>
                        <th
                          scope="col"
                          className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                          Exclusions
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          2 night of stays in Oslo
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          Expenses of a personal nature
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          {" "}
                          <IoMdClose />
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          2 night of stays in Bergen
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          Meals not mentioned in the itinerary or inclusions
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          {" "}
                          <IoMdClose />
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          1 night stay in Oslo
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          International flight tickets
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          {" "}
                          <IoMdClose />
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          1 night stay in Flam
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          Lunch
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          <IoMdClose />
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Oslo Fjord Cruise Sightseeing on a Shared basis
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Dinner
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          <IoMdClose />
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Airport transfer from Oslo Airport, Gardermoen to Deluxe hotel		
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Internal Flights
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          <IoMdClose />
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Bergen Fjord Cruise to Alversund Streams on a Shared basis
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Travel Insurance
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          <IoMdClose />
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Scenic Flam Train Ride on a Shared basis and ticket
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Scenic Train Ride to Bergen on a Shared basis and ticket

                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        
                        </td>
                        <td className="px-6 py-3 text-red-500 text-xl">
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <form
                className="space-y-4 p-4 bg-zinc-200 rounded-lg"
                action="#"
                method="POST"
              >
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your Name"
                    required
                    className="px-3 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="px-3 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                  />
                </div>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    placeholder="Select Date"
                    required
                    className="px-3 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                  />
                </div>
                <div>
                  <input
                    id="count"
                    name="count"
                    type="number"
                    min="1"
                    placeholder="Travel Count"
                    required
                    className="px-3 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    id="message"
                    rows={4}
                    className="px-3 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                    defaultValue={""}
                  />
                </div>
                <p className="flex">
                  <IoMdCheckmark className="text-teal-600 w-5 mt-1 mr-2" />
                  <span className="flex-1">
                    We assure the privacy of your contact data.
                  </span>
                </p>
                <p className="flex">
                  <IoMdCheckmark className="text-teal-600 w-5 mt-1 mr-2" />{" "}
                  <span className="flex-1">
                    This data will only be used by our team to contact you and
                    no other purposes.
                  </span>
                </p>

                <div>
                  <button type="submit" className="btn w-full">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Norway;
