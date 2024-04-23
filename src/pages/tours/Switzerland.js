import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegStar, FaStar,  } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoMapOutline, IoPersonAddOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";


const Switzerland = () => {
  return (
    <>
      <Row className="g-0 m-0">
        <Col md={6}>
          <img src="../images/swit1.jpg" className="w-full" />
        </Col>
        <Col md={6} className="ps-1 pe-1">
          <Row className="g-1">
            <Col md={6}>
              <img src="../images/swit2.jpg" className="w-full" />
            </Col>
            <Col md={6}>
              <img src="../images/swit3.jpg" className="w-full" />
            </Col>
            <Col md={6}>
              <img src="../images/swit6.jpg" className="w-full h-full" />
            </Col>
            <Col md={6}>
              <img src="../images/swit5.jpg" className="w-full" />
            </Col>
          </Row>
        </Col>
      </Row>

      <section className="py-4 py-sm-5">
        <Container>
          <div className="flex flex-wrap justify-between pb-8 pt-6 mb-8 border-b border-stock-1">
            <div className="">
              <h1 className="fs-2 mb-3">
                Glimpse Of Switzerland | FREE FIFA Museum Tickets
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
              <del>INR 1,20,800</del>
              <h2 className="lg:text-[35px] leading-1.2 md:text-xl font-semibold mb-3">
                INR 99,800
              </h2>
              <div className="text-md font-normal ml-1">per person</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-base gap-6">
            <div className="lg:col-span-8 col-span-12">
              <h3 className="lg:text-2xl text-xl text-black font-medium leading-[1.5] mb-6">
                Glimpse Of Switzerland Overview
              </h3>
              <ul className="flex items-center gap-4 text-black mb-8">
                <li className="pe-4 border-r border-zinc-400 flex items-center">
                <LuClock className="mr-2" /> 4 Days / 5 Night
                </li>
                <li className="pe-4 border-r border-zinc-400 flex items-center">
                  {" "}
                  <IoPersonAddOutline className="mr-2" /> Max People : 10
                </li>
                <li className="pe-4 flex items-center">
                <IoMapOutline className="mr-2" /> North Transylvania
                </li>
              </ul>
              <p>
                There's a place that strings a distant chord of fascination
                within, a place that came straight out of an artist’s
                imagination, Switzerland is indeed a land of bountiful beauty.
                The snow-covered Swiss Alps and the scenic lakes amidst the
                mountainous backdrops are something that would captivate your
                inner being.
              </p>
              <p>
                The city of Zurich, famed for being Europe’s largest financial
                centre, is the gateway to the fantasy land of white-washed
                mountains and snowy escapades. When you venture out for Mount
                Titlis on Rotair, you will step into the world of Narnia to
                which Lucy opened the wardrobe door. Your astonishment doesn’t
                cease here, wait till you discover Lucerne, a city graced with
                medieval architecture, snuggled on the edge of Lake Lucerne
                amidst a snow-capped mountain. A tour to Zurich will involve all
                the European delights starting from its first Cog railway,
                cascading Rhine Falls to Zurich’s little surprises like the
                Swiss National Museum, Zurich Opera house, and Fifa Football
                Museum, this 5-day tour to Switzerland will give you the best
                experience you can think of.
              </p>

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
                        <span>3 Nights Accommodation</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Airport Transfers</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>2 Meals / day</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 text-md mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Box Lunch, Dinner &amp; Snacks.</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 text-md mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>On Trip Transport</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="lg:flex lg:pt-6 py-6 lg:pb-6 border-t border-stock-1 last:border-b">
                  <div className="lg:w-1/3 lg:text-2md text-md text-black font-medium">
                    Price Excludes
                  </div>
                  <div className="lg:w-2/3 lg:mt-0">
                    <ul className="lg:grid flex flex-wrap grid-cols-2 lg:gap-y-5 gap-y-3 gap-x-3">
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Departure Taxes</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Airport Transfers</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 lg:text-md text-base mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Entry Fees</span>
                      </li>
                      <li className="col-span-1 text-black text-sm lg:text-base flex items-center">
                        <div className="text-primary-1 text-md mr-2">
                          <IoMdCheckmark className="text-teal-600" />
                        </div>
                        <span>Box Lunch, Dinner &amp; Snacks.</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="lg:pt-10 pt-8">
                <h3 className="text-2xl mb-3">Tour Plan</h3>
                <p>
                  Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.
                  Nulla ultrices ex at erat pharetra, vitae viverra mauris
                  condimentum. Sed ullamcorper dignissim enim, vel egestas lacus
                  tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce
                  vel nibh diam.
                </p>
                <div>
                  <div className="flex single__count">
                    <div className="shrink-0 day__count">
                      <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        01
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 01 : Arrival in Zurich | Welcome to the cultural hub
                        of Switzerland
                      </h5>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Arrive at the Zurich Airport and get ready with the
                          necessary documentation for the immigration process.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          It will take around 45 minutes to 1 hour depending
                          upon the people in the queue.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          After the immigration process, take public transport
                          (bus) using a Swiss Pass to reach your pre-booked
                          hotel.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Proceed with the check-in formalities and spend the
                          rest of the day at leisure.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          You can stroll around the streets of Zurich, stroll
                          around the markets and collect souvenirs for your
                          loved ones.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />{" "}
                          Head back to the hotel for the overnight stay.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />{" "}
                          Overnight stay in Zurich.
                        </li>
                      </ul>
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
                        Day 02: Excursion to Mount Titlis | Half Day City Tour
                        Of Lucerne | Ascend in ROTAIR, the World's first 360
                        degress revolving Cable Car
                      </h5>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Arrive at the Zurich Airport and get ready with the
                          necessary documentation for the immigration process.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          It will take around 45 minutes to 1 hour depending
                          upon the people in the queue.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          After the immigration process, take public transport
                          (bus) using a Swiss Pass to reach your pre-booked
                          hotel.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Proceed with the check-in formalities and spend the
                          rest of the day at leisure.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          You can stroll around the streets of Zurich, stroll
                          around the markets and collect souvenirs for your
                          loved ones.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Head back to the hotel for the overnight stay.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Overnight stay in Zurich.
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
                    <div className="lg:ml-[18px] ml-4 pb-8">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 03: A day in leisure | Explore the city of Zurich at
                        your own pace
                      </h5>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Wake up to the beautiful morning of Zurich and have a
                          delicious breakfast
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          You could choose to spend the day in leisure at your
                          hotel
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          You could also head out to explore the city and find
                          be surprised at what the city has to offer
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Overnight stay in Zurich
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex single__count ">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        04
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 04: Excursion to Rhine Falls | Feel the goosebumps
                        on your skin as you hear the roar of Rhine Falls
                      </h5>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Open your eyes to the beautiful morning of Zurich,
                          fill your stomach with a tasty breakfast and get ready
                          o witness Rhine Falls, one of the many wonders of
                          Nature
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Board a train from Zurich to Schaffhausen, where the
                          magnificent Rhine Falls is situated
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          The towering castle over Rhine Falls is Schloss Laufen
                          and there are three viewpoints between Schloss Laufen
                          and Rhine Falls: Belvedere, Kanzeli, and Fischnetz
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Except for Belvedere, the other two viewpoints have
                          steps that you have to climb
                        </li>

                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Have a thrilling experience while getting to and from
                          Belevedere via glass lift
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          You could touch the water from Kanzeli and Fischnetz's
                          viewpoints as the cascading water comes
                          unrealistically close from here
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          To make your experience more exhilarating, choose from
                          the 4 different boat rides that operate there and
                          enhance your experience of the Rhine Falls
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          If you take interest in hiking, then you could explore
                          the facets of the place by taking short circular hikes
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          After an eventful day, head towards your hotel in
                          Zurich
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Overnight stay in Zurich
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex single__count ">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        05
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 05: Sightseeing of Zurich | Feed your inner soccer
                        enthusiast’s desire as you witness the Fifa Football
                        Museum
                      </h5>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Wake up to another blissful morning in Zurich, after
                          having a hearty breakfast, get ready to travel through
                          the city of Zurich
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          You could visit the Swiss National Museum with your
                          Swiss Pass which traces Switzerland's history from its
                          beginnings up to the present day.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          To make your day more exciting, you might want to add
                          the Zurich Opera House to your checklist, which is
                          nestled at the Sechseläutenplatz and it has been the
                          home of the Zürich Opera since 1891.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Stroll around the streets of the old town,
                          Bahnhofstrasse, one of the world's most expensive and
                          exclusive shopping avenues.
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Witness the rich heritage of football, and the game’s
                          ultimate prize displayed in a grand manner when you
                          enter the FIFA museum, using your Swiss Pass
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          After you are done exploring the city, head back to
                          your hotel
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Overnight stay in Zurich
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex single__count ">
                    <div className="shrink-0 day__count">
                      <div className=" lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border-1 border-teal-800 text-teal-800 flex justify-center items-center lg:text-lg md:2md text-md font-semibold  bg-white">
                        06
                      </div>
                    </div>
                    <div className="lg:ml-[18px] ml-4 pb-8">
                      <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2 mb-3">
                        Day 06: Transfer to Zurich airport | Bid adieu to Zurich
                      </h5>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Wake up, have a sumptuous breakfast, and get ready to
                          say goodbye to Zurich
                        </li>
                        <li className="flex items-start">
                          <IoMdCheckmark className="text-teal-600 mr-2 mt-1" />
                          Return home with a plethora of memories of the
                          unforgettable place, Zurich.
                        </li>
                      </ul>
                    </div>
                  </div>
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
                  <button
                    type="submit"
                    className="btn w-full"
                  >
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

export default Switzerland;
