import { SelectRoleBtns } from "@/components/ComponentExporter";
import { setRole } from '@/components/Role/SelectRoleBtns'

const Role = () => {
  return (
    <>
      <section className="w-full lg:h-screen min-h-screen overflow-x-hidden overflow-y-auto bg-white flex flex-col items-center">
        <h1 className="font-black text-black text-xl md:7xl lg:text-4xl p-3 m-2 flex flex-col items-start w-full">
          Select Your Role
          <span className="text-xs md:text-sm font-thin text-gray-700 mx-1">
            Set up your role, get results based on your role.{" "}
            <span className="font-normal text-black">
              ( * for global requestors )
            </span>
          </span>
        </h1>
        <div className="w-full flex flex-col lg:flex-row lg:justify-center items-center p-3">
          <SelectRoleBtns />
        </div>
        <div className="flex flex-row w-full p-6">
          <div className="p-2 w-1/2">
            <h3 className="font-bold text-slate-600 text-xl">
              Who is Supplier?
            </h3>
            <p className="w-fit text-black text-left font-thin">
            A Producer is an individual or organization with surplus or unused essentials like food, clothes, furniture, or other items they no longer need. Instead of letting these items go to waste, producers can list them on our platform for redistribution. By doing this, they play a key role in promoting sustainability and helping others who can make use of these items. Join us as a producer and contribute to reducing waste while supporting those in need!
            </p>
          </div>
          <div className="p-2 w-1/2">
            <h3 className="font-bold text-slate-600 text-xl">Who is Reciever?</h3>
            <p className="w-fit text-black text-left font-thin">
            
            A Consumer is someone seeking essentials such as food, clothing, or furniture. Consumers can browse the available items on our platform and request what they need—free or at minimal cost. By choosing to reuse instead of buying new, consumers help reduce waste and foster a circular economy. If you're in need of essential items, explore the listings and find what you’re looking for!

            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Role;
