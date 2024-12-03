"use client";

import DashboardNav from "@/components/Navbar/DashboardNav";
import { useSession } from "next-auth/react";
import NotFound from "@/app/not-found";
import { Wait } from "@/components/ComponentExporter";

const DashboardLayout = ({ children }) => {
  const { data: session, status } = useSession();

  return (
    <section className="h-screen flex">
      {status === "loading" ? (
        <Wait />
      ) : status === "authenticated" ? (
        <div className="flex flex-grow lg:flex-row flex-col lg:items-center w-full">
          <DashboardNav />
          <main className="flex-grow">{children}</main>
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default DashboardLayout;
