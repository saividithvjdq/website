import "../components/Events/Events.css";
import events from "../data/events.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reveal from "../components/Reveal.jsx";

export default function Events() {
  const recentYear = Object.keys(events.past)[0];
  const [pastevents, setPastevents] = useState(events.past[recentYear]);
  const [year, setyear] = useState(recentYear.slice(1));
  const navigate = useNavigate();

  const handleYearChange = (e) => {
    setPastevents(events.past[e]);
    setyear(e.slice(1));
  };

  return (
    <>
      {/*Event highlights*/}
      <section className="clip-art-1 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className=" w-full md:w-2/3 pb-5">
          <h1 className="text-4xl sm:text-5xl pb-4 sm:pb-4 md:text-6xl md:pb-3 font-bold text-white">
            Discover Amazing Events we Organized
          </h1>
          <p className="text-sm text-white sm:block sm:text-lg md:pb-none pr-3">
            Explore the diverse range of events we've hosted, designed to
            inspire, educate, and bring our community together
          </p>
        </div>
      </section>
      {/* Display by year */}
      <div className="max-w-5xl md:max-w-[90%] h-full mb-20 my-4 mx-auto px-4">
        <div className="w-full">
          <div className="pt-6">
            {/* Upcoming events */}
            {events.upcoming.length !== 0 && (
              <>
                <h2 className="text-4xl text-center font-bold mb-7 ">
                  Upcoming Events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
                  {events.upcoming.map((event, index) => (
                    <Reveal key={index}>
                      <div
                        className="max-w-[400px] rounded-lg h-full shadow-2xl bg-gray-100 hover:shadow-[0px_25px_50px_-12px] transition-all duration-500 hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                        onClick={() => navigate(event.link)}
                      >
                        <img
                          src={event.image}
                          style={{ maxWidth: "100%" }}
                          alt={event.name}
                          draggable={false}
                          className="w-full rounded-t-lg"
                        />

                        <div className="p-7 pt-0">
                          <span className="inline-block px-3 py-1 bg-[#0f323f] text-white text-sm rounded-full mt-4 mb-2">
                            {event.category}
                          </span>
                          {event?.isLimitedRegistrations === true && (
                            <span className="inline-block px-3 py-1 bg-[#A13B38] text-white text-sm rounded-full mt-4 mb-2 mx-3">
                              Limited Registrations
                            </span>
                          )}
                          <h2 className="text-2xl font-semibold mb-2 ">
                            {event.name}
                          </h2>
                          <p className="text-gray-500 font-light font-['Roboto']">
                            {event.date}
                          </p>
                          <p className="text-lg mt-2">{event.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col flex-wrap gap-5">
            <h2 className="text-4xl text-center font-bold">Past Events</h2>
            <div className="text-center mt-3">
              {Object.keys(events.past).map((eventyear) => (
                <button
                  key={eventyear}
                  className={`text-center mx-4 w-24 h-9 font-bold text-lg border-2 border-black text-black shadow-[5px_5px_5px_0px] hover:shadow-none  transition-all rounded-md  ${
                    year.toString() === eventyear.slice(1)
                      ? "bg-[#0f323f] text-white"
                      : "bg-white"
                  } `}
                  onClick={() => handleYearChange(eventyear)}
                >
                  {eventyear.slice(1)}
                </button>
              ))}
            </div>
            {Object.keys(pastevents).length === 0 ? (
              <p>No events in year {year}</p>
            ) : (
              <>
                {/* Past events */}
                <h2 className="text-2xl">Events of year {year}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
                  {pastevents.map((event, index) => (
                    <Reveal key={index}>
                      <div
                        className="max-w-[400px] rounded-lg h-full shadow-2xl bg-gray-100 hover:shadow-[0px_25px_50px_-12px] transition-all duration-500 hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                        onClick={() => navigate(event.link)}
                      >
                        <img
                          src={event.image}
                          style={{ maxWidth: "100%" }}
                          alt={event.name}
                          draggable={false}
                          className="w-full rounded-t-lg"
                        />

                        <div className="p-7 pt-0">
                          <span className="inline-block px-3 py-1 bg-[#0f323f] text-white text-sm rounded-full mt-4 mb-2">
                            {event.category}
                          </span>
                          <h2 className="text-2xl font-semibold mb-2 ">
                            {event.name}
                          </h2>
                          <p className="text-gray-500 font-light font-['Roboto']">
                            {event.date}
                          </p>
                          <p className="text-lg mt-2">{event.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* category section */}
      {/* <div className="max-w-5xl md:max-w-[90%] h-full mb-20 my-4 mx-auto px-4 border border-black">
        <h1></h1>
      </div> */}
    </>
  );
}
