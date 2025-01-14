import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const MenuNavigate = () => {
  const [activeTab, setActiveTab] = useState("COMICS");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-blue-500 text-white rounded-lg z-10 w-[794px] mx-auto h-10">
      {/* Tabs */}
      <ul className="flex list-none p-0 m-0">
        {["COMICS", "SERIES", "EVENTOS", "HISTORIAS"].map((tab) => (
          <li
            key={tab}
            className={`px-5 py-2 cursor-pointer ${
              activeTab === tab ? "bg-gray-200 text-blue-500" : "bg-transparent"
            } rounded-lg mr-2`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="mt-5 p-2">
        {activeTab === "COMICS" && (
          <div className="h-[370px] max-w-full mx-auto">
            <Carousel className="h-full">
              <div className="relative h-[370px]">
                <Image
                  className="rounded-lg object-contain w-full h-full"
                  src="https://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a.jpg"
                  alt="Comic 1"
                  layout="fill"
                />
               
              </div>
              <div className="relative h-[370px]">
                <Image
                  className="rounded-lg object-contain w-full h-full"
                  src="https://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a.jpg"
                  alt="Comic 2"
                  layout="fill"
                />
                
              </div>
            </Carousel>
          </div>
        )}
        {activeTab === "SERIES" && (
          <div className="h-[370px] max-w-full mx-auto">
            <Carousel className="h-full">
              <div className="relative h-[370px]">
                <Image
                  className="rounded-lg object-contain w-full h-full"
                  src="https://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a.jpg"
                  alt="Series 1"
                  layout="fill"
                />
                
              </div>
              <div className="relative h-[370px]">
                <Image
                  className="rounded-lg object-contain w-full h-full"
                  src="https://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a.jpg"
                  alt="Series 2"
                  layout="fill"
                />
              
              </div>
            </Carousel>
          </div>
        )}
        {activeTab === "EVENTOS" && (
          <div className="h-[370px] max-w-full mx-auto">
            <Carousel className="h-full">
              <div className="relative h-[370px]">
                <Image
                  className="rounded-lg object-contain w-full h-full"
                  src="https://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a.jpg"
                  alt="Event 1"
                  layout="fill"
                />
               
              </div>
              <div className="relative h-[370px]">
                <Image
                  className="rounded-lg object-contain w-full h-full"
                  src="https://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a.jpg"
                  alt="Event 2"
                  layout="fill"
                />
                
              </div>
            </Carousel>
          </div>
        )}
        {activeTab === "HISTORIAS" && (
          <div className="h-[370px] max-w-full mx-auto">
            <Carousel className="h-full">
              <div className="relative h-[370px]">
                <Image
                  className="rounded-lg object-contain w-full h-full"
                  src="https://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a.jpg"
                  alt="Story 1"
                  layout="fill"
                />
                
              </div>
              <div className="relative h-[370px]">
                <Image
                  className="rounded-lg object-contain w-full h-full"
                  src="https://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a.jpg"
                  alt="Story 2"
                  layout="fill"
                />
                
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuNavigate;
