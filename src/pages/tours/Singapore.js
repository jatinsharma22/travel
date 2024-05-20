import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCar, FaRegStar, FaStar } from "react-icons/fa";
import { LiaParachuteBoxSolid } from "react-icons/lia";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { MdFlight, MdHotel, MdOutlineNightsStay } from "react-icons/md";
import Slider from "react-slick";

const Singapore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    nav: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <>
      <Slider {...settings} className="md:hidden">
        <div>
          <img src="../images/singapore1.jpg" alt="" />
        </div>
        <div>
          <img src="../images/singapore5.jpg" alt="" />
        </div>
        <div>
          <img src="../images/singapore2.jpg" alt="" />
        </div>
        <div>
          <img src="../images/singapore3.jpg" alt="" />
        </div>
        <div>
          <img src="../images/singapore4.jpg" alt="" />
        </div>
        <div>
          <img src="../images/singapore6.jpg" alt="" />
        </div>
        <div>
          <img src="../images/singapore7.jpg" alt="" />
        </div>
      </Slider>
      <div className="g-0 m-0 hidden md:flex">
        <img src="../images/singapore_main_banner.jpg" alt="" />
      </div>

      <section className="py-4 py-sm-5">
        <Container>
          <div className="sm:flex justify-between sm:pb-8 pb-4 mb-4 sm:mb-8 border-b border-stock-1">
            <div className="flex-1 sm:pr-3">
              <h1 className="fs-2 mb-3">
                Glimpse of Singapore | Flight Inclusive Deal
              </h1>
              <div className="flex text-primary-1 mr-3 text-sm">
                <FaStar className="me-1 text-warning" />
                <FaStar className="me-1 text-warning" />
                <FaStar className="me-1 text-warning" />
                <FaStar className="me-1 text-warning" />
                <FaRegStar className="me-1 text-warning" />
              </div>
            </div>
            <div className="md:w-48 sm:text-right lg:text-left">
              <del>1439.62 EUR</del>
              <h2 className="lg:text-[35px] leading-1.2 text-xl md:text-2xl font-semibold mb-3">
                912.33 EUR
              </h2>
              <div className="text-md font-normal ml-1">Per Person</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-base gap-6">
            <div className="lg:col-span-8 col-span-12">
              <h3 className="lg:text-2xl text-xl text-black font-medium leading-[1.5] mb-6">
                Trip Highlights
              </h3>
              <ul className="flex items-center gap-4 text-black mb-8 flex-wrap">
                <li className="pe-4 border-r border-zinc-400 flex items-center">
                  <LuClock className="mr-2" /> 5 Days / 4 Night
                </li>
                <li className="pe-4 border-r border-zinc-400 flex items-center">
                  {" "}
                  <MdOutlineNightsStay className="mr-2" /> 5 Days in{" "}
                  <strong className="ml-1"> Singapore</strong>
                </li>
              </ul>

              <ul>
                <li className="mb-4 flex">
                  <span>
                    <IoMdCheckmark className="w-5 text-teal-600 mt-1.5 mr-2" />
                  </span>
                  <span className="flex-1">
                    From visiting popular attractions to enjoying an exciting
                    cable car ride, spend a great vacation in Singapore and
                    create lifelong memories.
                  </span>
                </li>
                <li className="mb-4 flex">
                  <span>
                    <IoMdCheckmark className="w-5 text-teal-600 mt-1.5 mr-2" />
                  </span>
                  <span className="flex-1">
                    Experience a thrilling Night Safari including a Tram ride,
                    fire dance show and look at various nocturnal creatures.
                  </span>
                </li>
                <li className="mb-4 flex">
                  <span>
                    <IoMdCheckmark className="w-5 text-teal-600 mt-1.5 mr-2" />
                  </span>
                  <span className="flex-1">
                    Visit a key attraction among tourists in Singapore, the
                    Universal Studios, and spend a day full of joy and
                    adventure.
                  </span>
                </li>
                <li className="mb-4 flex">
                  <span>
                    <IoMdCheckmark className="w-5 text-teal-600 mt-1.5 mr-2" />
                  </span>
                  <span className="flex-1">
                    Explore Sentosa Island and visit the Adventure Cove
                    Waterpark to enjoy amazing rides and the Wings of Time show.
                  </span>
                </li>
              </ul>

              <ul className="mt-base sm:mt-8 mt-4">
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

              <div className="lg:pt-10 sm:pt-8 pt-4">
                <h3 className="text-2xl mb-3">Tour Plan</h3>

                <div>
                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        01
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 sm:pb-8 pb-4 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 01 : Singapore
                      </h5>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3 mb-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>2 Transfers:</strong>
                        </p>
                      </div>
                      <ul className="list-disc list-inside flex flex-col gap-2 mb-4 text-dark text-sm">
                        <li>
                          Transfer from Singapore Changi Airport to Deluxe hotel
                          in Singapore
                        </li>
                        <li>
                          Transfer from Deluxe hotel in Singapore to Deluxe
                          hotel in Singapore
                        </li>
                      </ul>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <LiaParachuteBoxSolid />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Activity:</strong> Singapore Night Safari
                          Tickets with Tram Ride - [Open Dated] Singapore Night
                          Safari Admission with Tram Ride on a Shared basis
                        </p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <MdFlight />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Flight:</strong> Check-in at Fresh Hotel in
                          Athens
                        </p>
                      </div>
                      <div className="bg-light p-2 rounded flex items-center justify-between text-[12px]">
                        <p className="mb-0 text-gray-400 leading-5">
                          Starts At{" "}
                          <span className="block text-black">10:55 PM</span>
                        </p>
                        <p className="mb-0 text-gray-400 leading-5">
                          8 Hours 5 Minutes
                        </p>
                        <p className="mb-0 text-gray-400 leading-5">Ends</p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <MdHotel />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Hotel:</strong> Check-in at Deluxe hotel in
                          Singapore
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
                    <div className="lg:ml-[18px] ml-4 sm:pb-8 pb-4 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 02 : Singapore
                      </h5>
                      <ul className="lg:grid flex flex-wrap lg:gap-y-5 gap-y-3 gap-x-3 bg-blue-100 rounded-md mb-3 p-3">
                        <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <IoMdCheckmark className="text-teal-600" />
                          </div>
                          <span>Breakfast At Deluxe Hotel</span>
                        </li>
                      </ul>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Transfer:</strong> Transfer from Deluxe hotel
                          in Singapore to Deluxe hotel in Singapore
                        </p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <LiaParachuteBoxSolid />
                        </span>
                        <p className="text-sm m-0">
                          <strong>2 Activity:</strong>
                        </p>
                      </div>
                      <ul className="list-disc list-inside flex flex-col gap-2 py-3 text-dark text-sm">
                        <li>
                          Singapore Half-Day Sightseeing Tour on a Shared basis
                        </li>
                        <li>
                          Gardens By The Bay Tickets, Singapore - [SUPER SAVER
                          COMBO] Flower Dome + Cloud Forest on a Shared basis
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        03
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 sm:pb-8 pb-4 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 03: Singapore
                      </h5>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3 mb-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Transfers:</strong> Transfer from Deluxe hotel
                          in Singapore to Deluxe hotel in Singapore
                        </p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <LiaParachuteBoxSolid />
                        </span>
                        <p className="text-sm m-0">
                          <strong>2 Activity:</strong> Universal Studios
                          Singapore Tickets - Universal Studios Singapore
                          One-Day Admission Ticket on a Shared basis
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
                        04
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 sm:pb-8 pb-4 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 04: Singapore
                      </h5>

                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Transfer:</strong> Transfer from Deluxe hotel
                          in Singapore to Deluxe hotel in Singapore
                        </p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <LiaParachuteBoxSolid />
                        </span>
                        <p className="text-sm m-0">
                          <strong>3 Activity:</strong>
                        </p>
                      </div>
                      <ul className="list-disc list-inside flex flex-col gap-2 py-3 text-dark text-sm">
                        <li>
                          Singapore Cable Car Tickets - Singapore Cable Car Sky
                          Pass (Round Trip) on a Shared basis
                        </li>
                        <li>
                          Adventure Cove Waterpark Tickets - Adventure Cove
                          Waterpark One-Day Admission Ticket on a Shared basis
                        </li>
                        <li>
                          Wings Of Time Tickets, Singapore - Wings of Time –
                          Standard Admission Ticket - 8:40 PM on a Shared basis
                        </li>
                      </ul>
                      <div className="text-black text-sm lg:text-base items-center mt-4 flex bg-blue-100 rounded-md mb-3 p-3">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Breakfast At Deluxe Hotel</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        05
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 sm:pb-8 pb-4 flex-1">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 05: Singapore
                      </h5>

                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <FaCar />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Transfer:</strong> Transfer from Deluxe hotel
                          in Singapore to Singapore Changi Airport
                        </p>
                      </div>
                      <div className="p-3 border-b border-gray-200  text-black flex gap-3">
                        <span>
                          <MdFlight />
                        </span>
                        <p className="text-sm m-0">
                          <strong>Flight:</strong> Singapore Changi Airport to
                          Indira Gandhi International Airport
                        </p>
                      </div>
                      <div className="bg-light p-2 rounded flex items-center justify-between text-[12px]">
                        <p className="mb-0 text-gray-400 leading-5">
                          Starts At{" "}
                          <span className="block text-black">08:30 AM</span>
                        </p>
                        <p className="mb-0 text-gray-400 leading-5">
                          3 Hours 5 Minutes
                        </p>
                        <p className="mb-0 text-gray-400 leading-5">Ends</p>
                      </div>
                      <div className="text-black text-sm lg:text-base items-center mt-4 flex bg-blue-100 rounded-md mb-3 p-3">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Breakfast At Deluxe Hotel</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-xl mb-4">
                  What’s inside the package?
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
                          Flights included from Delhi to Singapore
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          Expenses of a personal nature.
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
                          Flights included from Singapore to Delhi
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
                          4 night of stays in Singapore
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800"></td>
                        <td className="px-6 py-3 text-red-500 text-xl"> </td>
                      </tr>

                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Singapore Half-Day Sightseeing Tour on a Shared basis
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800"></td>
                        <td className="px-6 py-3 text-red-500 text-xl"></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Airport transfer from Singapore Changi Airport
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800"></td>
                        <td className="px-6 py-3 text-red-500 text-xl"></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Airport transfer from Singapore Changi Airport to
                          Deluxe hotel
                        </th>
                        <td className="px-6 py-3 text-green-500 text-xl">
                          <IoMdCheckmark />
                        </td>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800"></td>
                        <td className="px-6 py-3 text-red-500 text-xl"></td>
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

      <div className="bg-[#e8dcca] py-10 mb-10">
        <Container>
          <h3 className="mb-6 text-2xl">Know Before You Go</h3>
          <ul className="text-dark list-inside list-disc gap-3 flex flex-col">
            <li>
              ID proof is mandatory for each individual guest at the time of
              arrival.
            </li>
            <li>
              Visa assistance will be provided but the price is not included in
              the package.
            </li>
            <li>Please do not litter and keep the destination clean.</li>
            <li>
              The activities and tickets included in the package are
              non-refundable in case of cancellation.
            </li>
            <li>
              Any breakage or damage of any items in the hotel will be charged
              at actuals.
            </li>
            <li>
              Flights are subjective to availability. In case the mentioned
              flight is not available, Thrillophilia has the rights to offer
              flights as per the availability(prices might change).
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Singapore;
