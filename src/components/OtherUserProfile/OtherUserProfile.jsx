"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Loading, NotFound } from "../ComponentExporter";
import ReviewUserForm from "./ReviewUserForm";
import Image from "next/image";

const OtherUserProfile = ({ userId }) => {
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(false);

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/other/view-profile`, {
        other_userId: userId,
      });
      if (res.data.success) {
        setUserDetails((prev) => res.data.profileData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loading msg={"Fetching Details"} />
        </>
      ) : !userDetails ? (
        <>
          <NotFound msg={"[!] No data found"} />
        </>
      ) : (
        <>
          <div className="flex flex-col items-start gap-1">
            <Image
              src={userDetails.image}
              alt="/"
              className="w-32 h-32 rounded-full border-4 border-solid border-white m-1 p-1"
            />
            <span className="p-1 text-balance text-black font-normal">
              U-ID: {userDetails.id}
            </span>
            <h1 className="flex flex-row gap-1 items-center">
              <span className="text-xl bg-white px-2 rounded-full font-semibold text-blue-700">
                Name:
              </span>
              <span className="text-3xl font-black text-black uppercase">
                {userDetails.name}
              </span>
            </h1>
            <h2 className="flex flex-row gap-1 items-center">
              <span className="text-xl bg-white px-2 rounded-full font-semibold text-blue-700">
                Email:
              </span>
              <span className="text-3xl font-light text-black">
                {userDetails.email}
              </span>
            </h2>
            <h3 className="flex flex-row gap-1 items-center">
              <span className="text-xl bg-white px-2 rounded-full font-semibold text-blue-700">
                Contact:
              </span>
              <span className="text-3xl font-light text-black">
                {userDetails.contact}
              </span>
            </h3>
          </div>

          <hr className="w-full h-[.5px] bg-black my-3" />

          {/* Reviews Person */}
          <ReviewUserForm userId={userId} />
        </>
      )}
    </>
  );
};

export default OtherUserProfile;
