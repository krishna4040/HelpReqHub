"use client";

import { OAuth, Auth } from "@/components/ComponentExporter";
import { Wait } from "@/components/ComponentExporter";
import NotFound from "../not-found";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter()
  const { status } = useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    Object.values(formData).forEach((value) => {
      if (!value) return false;
    });
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (validate()) {
        const res = await signIn("user_credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (res?.ok) {
          router.replace("/");
        } else {
          alert("[!] Error, Invalid Details.");
        }
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

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
          <div>
            <p>Checking your login status</p>
          </div>
        ) : status === "unauthenticated" ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none"
                value={formData?.email}
                onChange={handleChange}
                autoComplete="off"
                required
                name="email"
                id="email"
              />
              <input
                type="password"
                placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none"
                value={formData?.password}
                onChange={handleChange}
                autoComplete="off"
                required
                name="password"
                id="password"
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
