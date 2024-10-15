"use client";

import { ImFacebook2, ImGoogle2, ImInstagram } from "react-icons/im";
import { signIn } from "next-auth/react";
import { useState } from "react";
import clsx from "clsx";

const oauthProviders = [
  { name: "Google", iconname: ImGoogle2 },
  { name: "Facebook", iconname: ImFacebook2 },
];

const OAuth = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = async (name) => {
    setLoading(true);
    await signIn(name.toLowerCase(), { redirect: true, callbackUrl: "/" });
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      {oauthProviders.map((provider, index) => {
        return (
          <button
            key={index}
            className={clsx(
              "w-full p-3 bg-green-400 text-white rounded-md flex items-center justify-center gap-2",
              loading ? "cursor-wait opacity-50" : "hover:bg-green-500"
            )}
            onClick={() => handleClick(provider.name)}
            disabled={loading}
          >
            <provider.iconname className="text-xl" />
            <span className="font-bold">
              Continue with {provider.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default OAuth;
