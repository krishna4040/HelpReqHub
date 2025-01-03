"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

const Auth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    contact: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

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

  const handleSumbit = async (event) => {
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
    <>
      <form
        className="flex flex-col items-start justify-between w-full max-w-md gap-5 p-3 bg-white m-2 md:shadow-md border-2 border-solid border-transparent md:border-green-400 rounded-lg"
        onSubmit={handleSumbit}
      >
        <div className="flex flex-col w-full">
          <label
            htmlFor="userName"
            className="text-base font-thin text-black capitalize"
          >
            Username
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Karan Yadav"
            autoComplete="off"
            value={formData?.userName}
            onChange={handleChange}
            className="border-2 text-black border-solid border-green-200 outline-none px-3 py-4 m-2 rounded-md shadow-md"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="text-base font-thin text-black capitalize"
          >
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            autoComplete="off"
            value={formData?.email}
            onChange={handleChange}
            className="border-2 text-black border-green-200 outline-none px-3 py-4 m-2 rounded-md shadow-md"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="contact"
            className="text-base font-thin text-black capitalize"
          >
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            id="contact"
            placeholder="1029384756"
            autoComplete="off"
            value={formData?.contact}
            onChange={handleChange}
            className="border-2 text-black border-solid border-green-200 outline-none px-3 py-4 m-2 rounded-md shadow-md"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="password"
            className="text-base font-thin text-black capitalize"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="########"
            autoComplete="off"
            value={formData?.password}
            onChange={handleChange}
            className="border-2 text-black border-solid border-green-200 outline-none px-3 py-4 m-2 rounded-md shadow-md"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="confirmPassword"
            className="text-base font-thin text-black capitalize"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="########"
            autoComplete="off"
            value={formData?.confirmPassword}
            onChange={handleChange}
            className="border-2 text-black border-solid border-green-200 outline-none px-3 py-4 m-2 rounded-md shadow-md"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="capitalize px-3 py-4 bg-green-500 hover:bg-green-400 font-semibold text-white rounded-md disabled:cursor-wait w-full"
        >
          {loading ? <>Processing...</> : <>Sign Up</>}
        </button>
      </form>
    </>
  );
};

export default Auth;
