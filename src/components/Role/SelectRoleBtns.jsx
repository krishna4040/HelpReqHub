"use client";

import { CiBoxes, CiBag1 } from "react-icons/ci";

const SelectRoleBtns = () => {
  const setRole = (role) => {
    localStorage.setItem("userRole", role);
    alert("Role set to " + role);
  };

  return (
    <>
      <div
        className="cursor-pointer bg-green-500 text-white p-3 m-2 flex flex-col items-center justify-between rounded-md hover:bg-green-600 w-full sm:w-1/2 min-w-fit"
        onClick={() => {
          setRole("supplier");
        }}
      >
        <CiBag1 className="text-9xl font-black" />
        <span className="text-5xl font-bold m-2">Supplier</span>
      </div>
      <div
        className="cursor-pointer bg-green-500 text-white p-3 m-2 flex flex-col items-center justify-between rounded-md hover:bg-green-600 w-full sm:w-1/2 min-w-fit"
        onClick={() => {
          setRole("receiver");
        }}
      >
        <CiBoxes className="text-9xl font-black" />
        <span className="text-5xl font-bold m-2">Reciever</span>
      </div>
    </>
  );
};

export default SelectRoleBtns;
