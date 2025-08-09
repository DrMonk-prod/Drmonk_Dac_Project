"use client";

import { popularSearches } from "@/data/popular-searches";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import React from "react";
import GlobalSearchCombobox from "@/components/ui/global-search-combobox";
import CityCombobox from "@/components/ui/city-combobox";

function SearchDoctor() {
  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col items-center space-y-2">
      <div className="bg-transparent md:bg-gray-100 md:dark:backdrop-blur-md flex flex-col md:flex-row gap-y-2 md:gap-y-0 items-center md:dark:bg-slate-800 rounded-full p-1 sm:p-2 font-poppins w-full">
        <div className="w-44 self-start bg-gray-100 dark:backdrop-blur-md dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent rounded-full md:w-1/3">
          <CityCombobox />
        </div>

        <hr className="hidden md:inline-block h-8 mx-2 border-1 border-gray-400 dark:border-slate-600" />

        <div className="self-start bg-gray-100 dark:backdrop-blur-md dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent rounded-full w-full md:w-2/3">
          <GlobalSearchCombobox />
        </div>
      </div>

      <div className="hidden md:flex mt-2 mr-3 shrink-0 self-start text-nowrap rounded-full space-x-3 text-stone-500 w-fit px-4">
        <h2 className="font-semibold mx-4">Popular searches: </h2>
        <ul className="flex text-gray-500">
          {popularSearches.slice(0, 3).map((speciality) => (
            <li
              className="cursor-pointer mx-4 hover:underline"
              key={speciality.name}
            >
              {speciality.name}
            </li>
          ))}
        </ul>
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center mr-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-sm font-medium text-gray-500">Others</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
          </PopoverTrigger>

          <PopoverContent className="w-80 p-0" align="start">
            <div className="p-4">
              <h3 className="font-medium mb-3 text-foreground">
                General Physicians and Specialists
              </h3>

              <div className="cursor-pointer">
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1 ">
                  {popularSearches.map((speciality) => (
                    <li
                      key={speciality.name}
                      className="cursor-pointer shrink-0 mx-4 hover:underline text-muted-foreground hover:text-foreground transition-colors text-sm py-1"
                    >
                      {speciality.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default SearchDoctor;
