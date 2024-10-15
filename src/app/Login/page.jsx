"use client";

import { OAuth, Auth } from "@/components/ComponentExporter";
import { Wait } from "@/components/ComponentExporter";
import NotFound from "../not-found";
import { useSession } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();

  return (
    <section className="flex flex-col md:flex-row justify-center items-start gap-8 p-6 bg-white">
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
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
           <button className="w-full p-3 bg-green-400 text-white rounded-md">
            Login
          </button>
        
      
        
            <div className="flex items-center justify-between my-2">
              <span className="w-full h-[1px] bg-slate-400"></span>
              <span className="text-sm text-slate-400 font-light mx-2">or</span>
              <span className="w-full h-[1px] bg-slate-400"></span>
            </div>
            <OAuth />
            </form>
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  );
};

export default Login;
