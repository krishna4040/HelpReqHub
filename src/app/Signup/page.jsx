"use client";

import { OAuth, Auth } from "@/components/ComponentExporter";
import { Wait } from "@/components/ComponentExporter";
import NotFound from "../not-found";
import { useSession } from "next-auth/react";

const Signup = () => {
  const { data: session, status } = useSession();

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center p-4 text-white">
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-3xl md:text-4xl text-center text-green-400">
          Welcome to
          <span className="block font-bold bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text text-4xl md:text-6xl capitalize mt-2">
            Recyclez
          </span>
        </h1>
        <h2 className="text-sm mt-1 text-slate-400 font-light text-center">
          An end-to-end Waste Management System
        </h2>
      </div>

      <div className="w-full max-w-md flex-grow flex flex-col justify-center">
        {status === "loading" ? (
          <Wait />
        ) : status === "unauthenticated" ? (
          <>
            <Auth />
            <div className="flex items-center justify-between my-4">
              <span className="w-full h-[1px] bg-slate-400"></span>
              <span className="text-sm text-slate-400 font-light mx-4">or</span>
              <span className="w-full h-[1px] bg-slate-400"></span>
            </div>
            <OAuth />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  );
};

export default Signup;
