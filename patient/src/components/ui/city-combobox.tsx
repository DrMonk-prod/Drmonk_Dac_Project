// "use client";

// import { defaultCities } from "@/data/cities";
// import { City } from "@/types/search-types";
// import { useState, useEffect, type KeyboardEvent } from "react";
// import { Check, ChevronsUpDown, MapPin, Loader2, Map } from "lucide-react";

// import axios from "axios";

// import {
//   Combobox,
//   ComboboxContent,
//   ComboboxEmpty,
//   ComboboxGroup,
//   ComboboxInput,
//   ComboboxItem,
//   ComboboxList,
//   ComboboxTrigger,
// } from "@/components/ui/kibo-ui/combobox";

// import { useDebouncedCallback } from "use-debounce";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/store/store";
// import { setSelectedCity } from "@/store/slices/citySlice";

// const base_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

// const CityCombobox = () => {
//   const [open, setOpen] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [cities, setCities] = useState<City[]>([]);
//   const { selectedCity } = useSelector((state: RootState) => state.city);
//   const [value, setValue] = useState(selectedCity.value);

//   console.log(selectedCity.value);
//   const dispatch: AppDispatch = useDispatch();

//   // useEffect(() => {}, [inputValue]);

//   // const handleInputChange = async (term: string) => {
//   //   setInputValue(term);
//   //   setOpen(true);

//   //   if (term.length <= 1) {
//   //     setFilteredCities([]);
//   //     return;
//   //   }

//   //   setIsLoading(true);
//   //   setError("");

//   //   try {
//   //     await new Promise((res) => setTimeout(res, 1200));
//   //     const result = cities.filter((city) =>
//   //       city.name.toLowerCase().includes(term.toLowerCase())
//   //     );
//   //     setFilteredCities(result);
//   //   } catch (err) {
//   //     setError("Something went wrong");
//   //     setFilteredCities([]);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   // const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
//   //   if (e.key === "Enter") {
//   //     e.preventDefault();
//   //     const first = filteredCities[0];
//   //     if (first) {
//   //       console.log("Selected city:", first);
//   //       // setSelected(first);
//   //       setOpen(false);
//   //       setInputValue("");
//   //     }
//   //   }
//   // };

//   const debounced = useDebouncedCallback(async (term: string) => {
//     if (term.length < 2) return;
//     const response = await axios.get(`${base_url}/search/cities?query=${term}`);
//     console.log(response.data);
//     if (response.data.length > 0) setValue(response.data[0].value);
//     setCities(response.data);
//     setInputValue(term);
//   }, 1000);

//   const filteredCities =
//     inputValue.length < 2 || cities.length == 0 ? defaultCities : cities;

//   const handleSelect = (value: string) => {
//     console.log("Selected city:", value);
//     const city = filteredCities.find((c) => c.value === value);
//     if (city) {
//       dispatch(setSelectedCity(city));
//       setValue(city.value);
//     }
//   };

//   return (
//     <>
//       <Combobox
//         data={filteredCities}
//         onOpenChange={setOpen}
//         onValueChange={handleSelect}
//         open={open}
//         type="City"
//         value={value}
//       >
//         <div className="flex items-center shrink-0 w-full">
//           <Map size={20} className="absolute left-2" />
//           <ComboboxTrigger className="relative pl-10 w-full [&_svg]:hidden bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-0 ring-0" />
//         </div>
//         <ComboboxContent>
//           <ComboboxInput
//             onChangeCapture={(e) => debounced(e.currentTarget.value)}
//           />
//           <ComboboxEmpty />
//           <ComboboxList>
//             <ComboboxGroup>
//               {filteredCities.map((city: City) => (
//                 <ComboboxItem key={city.value} value={city.value}>
//                   {city.label}
//                 </ComboboxItem>
//               ))}
//             </ComboboxGroup>
//           </ComboboxList>
//         </ComboboxContent>
//       </Combobox>

//       {/* //// */}
//       {/* <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="ghost"
//             role="combobox"
//             aria-expanded={open}
//             className="w-full justify-between h-11 px-3 py-2 text-sm font-normal border-none hover:bg-transparent outline-none focus-visible:ring-0 shadow-none bg-transparent"
//           >
//             <div className="flex items-center gap-2 flex-1 min-w-0">
//               <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
//               <span className="truncate text-left">
//                 {selected ? selected.name : "Search cities..."}
//               </span>
//             </div>
//             <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent
//           className="w-[--radix-popover-trigger-width] p-0"
//           align="start"
//         >
//           <Command shouldFilter={false}>
//             <CommandInput
//               placeholder="Search cities..."
//               value={inputValue}
//               onValueChange={handleInputChange}
//               onKeyDown={handleKeyPress}
//               className="h-9"
//             />
//             <CommandList>
//               {isLoading ? (
//                 <div className="flex items-center gap-2 px-2 py-3">
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                   <span className="text-sm text-muted-foreground">
//                     Loading...
//                   </span>
//                 </div>
//               ) : error ? (
//                 <div className="px-2 py-3">
//                   <span className="text-sm text-destructive">
//                     Error fetching cities
//                   </span>
//                 </div>
//               ) : inputValue.length <= 1 ? (
//                 <div className="px-2 py-3">
//                   <span className="text-sm text-muted-foreground">
//                     Type to search cities...
//                   </span>
//                 </div>
//               ) : (
//                 <>
//                   <CommandEmpty>No locality found.</CommandEmpty>
//                   <CommandGroup>
//                     {filteredCities.map((city) => (
//                       <CommandItem
//                         key={city.id}
//                         value={city.name}
//                         onSelect={() => handleSelect(city.value)}
//                         className="cursor-pointer"
//                       >
//                         <Check
//                           className={cn(
//                             "mr-2 h-4 w-4",
//                             selected?.id === city.id
//                               ? "opacity-100"
//                               : "opacity-0"
//                           )}
//                         />
//                         {city.name}
//                       </CommandItem>
//                     ))}
//                   </CommandGroup>
//                 </>
//               )}
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover> */}
//     </>
//   );
// };

// export default CityCombobox;

"use client";

import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { Check, Map } from "lucide-react";
import axios from "axios";

import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/kibo-ui/combobox";

import { defaultCities } from "@/data/cities";
import { City } from "@/types/search-types";
import { RootState, AppDispatch } from "@/store/store";
import { setSelectedCity } from "@/store/slices/citySlice";

const base_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

const CityCombobox = () => {
  const dispatch: AppDispatch = useDispatch();
  const { selectedCity } = useSelector((state: RootState) => state.city);

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState<City[]>([]);

  const debouncedSearch = useDebouncedCallback(async (term: string) => {
    if (term.length < 2) return;

    try {
      const response = await axios.get(
        `${base_url}/search/cities?query=${term}`
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities([]);
    }

    setInputValue(term);
  }, 500);

  const filteredCities = inputValue.length < 2 ? defaultCities : cities;

  const handleSelect = (value: string) => {
    const city = filteredCities.find((c) => c.value === value);
    if (city) {
      dispatch(setSelectedCity(city));
    }
  };

  return (
    <Combobox
      data={filteredCities}
      onOpenChange={setOpen}
      onValueChange={handleSelect}
      open={open}
      value={selectedCity.value}
      type="City"
    >
      <div className="flex items-center w-full relative bg-transparent">
        <Map size={20} className="absolute left-2 text-muted-foreground" />
        <ComboboxTrigger className="relative pl-10 w-full [&_svg]:hidden bg-transparent shadow-none border-none dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-0 ring-0" />
      </div>

      <ComboboxContent>
        <ComboboxInput
          placeholder="Search cities..."
          onChangeCapture={(e) => debouncedSearch(e.currentTarget.value)}
        />
        <ComboboxEmpty>No cities found</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            {filteredCities.map((city: City) => (
              <ComboboxItem key={city.value} value={city.value}>
                {city.label}
                {selectedCity?.value === city.value && (
                  <Check className="ml-auto h-4 w-4 text-primary" />
                )}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default CityCombobox;
