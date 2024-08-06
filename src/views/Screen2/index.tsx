import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function Screen2() {
  const color: any = useSelector((state: any) => state.color);

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: color }} className="w-full h-full">
        <h1 className="text-2xl mt-[72px]">Screen 2</h1>
      </div>
      <Footer />
    </>
  );
}

export default Screen2;
