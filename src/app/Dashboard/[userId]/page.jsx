import Image from "next/image";
import { HelpStats, Reviews, Stats } from "@/components/ComponentExporter";

const Dashboard = ({ params }) => {
  return (
    <>
      <section className="w-full h-screen overflow-hidden bg-white flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-black text-green-900 text-3xl p-3 m-2 flex flex-col items-start w-full">
            Dashboard
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
        <div className="w-full flex-grow overflow-y-auto p-4">
          <Stats />
          {/* <HelpStats />
          <Reviews /> */}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
