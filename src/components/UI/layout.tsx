import Navigation from "@/components/UI/navigation";
import Footer from "@/components/UI/footer";
import { useState } from "react";
import SideBar from "@/components/UI/sideBar";

export default function Layout(page: React.ReactNode) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Navigation toggle={toggle} setToggle={(toggle) => setToggle(toggle)} className="min-h-[8vh]"/>
      <div className="min-h-[88vh] grid grid-cols-10 transition-all duration-300 ease-in-out">
        <div
          className={`bg-indigo-50 h-full transform transition-all duration-300 ease-in-out ${
            toggle ? "col-span-2 translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar className={`${toggle ? "block" : "hidden"}`} />
        </div>
        <div
          className={`ransform transition-all duration-300 ease-in-out ${
            toggle ? "col-span-8" : "col-span-10"
          }`}
        >
          {page}
        </div>
      </div>
      <hr></hr>
      <Footer clasName="h-[4vh]"/>
    </div>
  );
}
