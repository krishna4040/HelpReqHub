import Image from "next/image";
import { HelpStats, Reviews, Stats } from "@/components/ComponentExporter";

const Dashboard = ({ params }) => {
  return (
    <>
      <section className="w-full lg:h-screen min-h-screen overflow-x-hidden overflow-y-auto bg-white flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-black text-green-900 text-3xl md:3xl lg:text-3xl p-3 m-2 flex flex-col items-start w-full">
            Dashboard
            {/* <span className="text-xs md:text-sm font-thin text-green-700 mx-1">
             
            </span> */}
          </h1>
          <Image
            src={"/dashboard-top.png"}
            alt="image"
            width={100}
            height={100}
            className="w-24 h-auto rounded-full mx-2"
            draggable={false}
          />
        </div>
        <div className="mt-3 p-1 w-full flex flex-col items-start">
          <div className="w-full mt-4">
            <Stats />
            {/* <HelpStats />
            <Reviews /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
