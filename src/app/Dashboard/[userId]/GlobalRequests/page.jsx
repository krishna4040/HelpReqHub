"use client";

import { CheckRole, UserCard } from "@/components/ComponentExporter";

const GlobalRequests = () => {
  return (
    <>
      <section className="w-full lg:h-screen min-h-screen overflow-x-hidden overflow-y-auto bg-white flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-black text-green-900 text-3xl md:4xl lg:text-4xl p-3 m-2 flex flex-col items-start w-full">
            Available Listings
            <span className="text-xs md:text-sm font-thin text-green-700 mx-1">
              List your products / Buy Products
            </span>
          </h1>
        </div>
        <CheckRole />
        <div className="mt-3 p-1 w-full flex flex-col items-start">
          <div className="flex flex-col w-full items-start">
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-black px-3 py-1 rounded-full">
              All Listings
              <span className="text-xl text-green-500 font-extrabold">{`(`}</span>
              <span className="font-pacifico text-sm mx-1">
                Based on your Location
              </span>
              <span className="text-xl text-green-500 font-extrabold">{`)`}</span>
            </h4>
            <div className="w-full my-1">
              <UserCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalRequests;
