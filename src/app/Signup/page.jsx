"use client";

import { OAuth, Auth } from "@/components/ComponentExporter";
import { Wait } from "@/components/ComponentExporter";
import NotFound from "../not-found";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const { status } = useSession();
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    contact: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("password and confirm password do not match");
      setLoading(false);
      return;
    }

    try {
      if (validate()) {
        const res = await signIn("user_credentials", {
          redirect: false,
          name: formData.userName,
          contact: formData.contact,
          email: formData.email,
          password: formData.password,
        });

        if (res?.ok) {
          router.replace("/Login");
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
    <section className="w-full h-[100vh-150px] flex gap-10 items-start justify-center p-6 text-white">
      <div className="flex flex-col items-center mb-4 mt-12">
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
              <>
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="flex items-center justify-center gap-5">
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="Enter a username"
                      autoComplete="off"
                      value={formData?.userName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none"
                      required
                    />
                    <input
                      type="tel"
                      name="contact"
                      id="contact"
                      placeholder="Enter your number"
                      autoComplete="off"
                      value={formData?.contact}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none"
                      required
                    />
                  </div>
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
                  <div className="flex items-center justify-center gap-5">
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
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      autoComplete="off"
                      value={formData?.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none"
                      required
                    />
                  </div>
                  <button className="w-full p-3 bg-green-400 text-white rounded-md">
                    Signup
                  </button>
                  <div className="flex items-center justify-center my-2">
  <span className="text-sm text-slate-400 font-light mx-2">Already have an account?</span>
  <a href="/Login" className="text-sm text-green-400 font-medium mx-2">Login</a>
</div>

                  <OAuth />
                </form>
              </>
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  );
};

export default Signup;
