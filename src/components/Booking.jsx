import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full py-4 px-10">
      <form className="flex justifiy-center w-full items-center gap-5">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2 border-black">
            <option>North Island</option>
            <option>West Island</option>
            <option>South Island</option>
          </select>
        </div>
        <div className="flex w-full gap-5">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2 border-black" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2 border-black" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 w-full">
          <label>Search</label>
          <button className="bg-blue-500 hover:bg-blue-800 w-[250px] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Rates & Availabilities
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
