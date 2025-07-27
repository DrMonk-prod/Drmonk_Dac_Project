// "use client";

// import { cities } from "@/data/cities";
// import { City } from "@/type/search-types";
// import {
//   Combobox,
//   HStack,
//   InputGroup,
//   Portal,
//   Span,
//   Spinner,
//   useListCollection,
// } from "@chakra-ui/react";
// import { Map } from "lucide-react";
// import { KeyboardEvent, useState } from "react";

// const LocalityCombobox = () => {
//   const [selected, setSelected] = useState("hinjewadi");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { collection, set } = useListCollection<City>({
//     initialItems: [],
//     itemToString: (item) => item.name,
//     itemToValue: (item) => item.name,
//   });

//   const handleInputChange = async (term: string) => {
//     setSelected(term);
//     setIsLoading(true);
//     setError("");

//     try {
//       // Artificial delay: 700ms
//       await new Promise((res) => setTimeout(res, 1200));

//       const result = cities.filter((city) =>
//         city.name.toLowerCase().includes(term.toLowerCase())
//       );

//       set(result);
//     } catch (err) {
//       setError("Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault();

//       const first = collection.firstValue;
//       if (first) {
//         console.log(first);
//         setSelected(first);
//       }
//     }
//   };

//   return (
//     <Combobox.Root
//       width="auto"
//       outline={"none"}
//       closeOnSelect
//       inputValue={selected}
//       collection={collection}
//       placeholder="locality..."
//       openOnChange={(e) => e.inputValue.length > 1}
//       onInputValueChange={(e) => handleInputChange(e.inputValue)}
//       positioning={{ sameWidth: true, placement: "bottom-start" }}
//     >
//       <Combobox.Control>
//         <InputGroup startElement={<Map size={20} />}>
//           <Combobox.Input
//             outline={"none"}
//             border={"none"}
//             paddingRight={12}
//             onKeyDown={handleKeyPress}
//             placeholder="Search locality..."
//             className="placeholder-gray-400 font-semibold"
//           />
//         </InputGroup>
//         <Combobox.IndicatorGroup>
//           <Combobox.ClearTrigger />
//           <Combobox.Trigger />
//         </Combobox.IndicatorGroup>
//       </Combobox.Control>

//       <Portal>
//         <Combobox.Positioner>
//           <Combobox.Content maxWidth={"sm"}>
//             {isLoading ? (
//               <HStack p="2">
//                 <Spinner size="xs" borderWidth="1px" />
//                 <Span>Loading...</Span>
//               </HStack>
//             ) : error ? (
//               <Span p="2" color="fg.error">
//                 Error fetching
//               </Span>
//             ) : (
//               collection.items?.map((city: City) => (
//                 <Combobox.Item key={city.id} item={city}>
//                   <HStack justify="space-between" textStyle="sm">
//                     <Span fontWeight="medium" truncate>
//                       {city.id}
//                     </Span>
//                     <Span color="fg.muted" truncate>
//                       {city.name}
//                     </Span>
//                   </HStack>
//                   <Combobox.ItemIndicator />
//                 </Combobox.Item>
//               ))
//             )}
//           </Combobox.Content>
//         </Combobox.Positioner>
//       </Portal>
//     </Combobox.Root>
//   );
// };

// export default LocalityCombobox;

"use client";

import { cities } from "@/data/cities";
import { City } from "@/types/search-types";
import { useState, useEffect, type KeyboardEvent } from "react";
import { Check, ChevronsUpDown, MapPin, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const LocalityCombobox = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<City | null>(cities[7]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const defaultCity = cities.find(
      (city) => city.name.toLowerCase() === "hinjewadi"
    );
    if (defaultCity) {
      setSelected(defaultCity);
    }
  }, []);

  const handleInputChange = async (term: string) => {
    setInputValue(term);

    if (term.length <= 1) {
      setFilteredCities([]);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await new Promise((res) => setTimeout(res, 1200));
      const result = cities.filter((city) =>
        city.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCities(result);
    } catch (err) {
      setError("Something went wrong");
      setFilteredCities([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const first = filteredCities[0];
      if (first) {
        console.log("Selected city:", first);
        setSelected(first);
        setOpen(false);
        setInputValue("");
      }
    }
  };

  const handleSelect = (city: City) => {
    console.log("Selected city:", city);
    setSelected(city);
    setOpen(false);
    setInputValue("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-11 px-3 py-2 text-sm font-normal border-none outline-none focus-visible:ring-0 shadow-none bg-transparent"
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="truncate text-left">
              {selected ? selected.name : "Search cities..."}
            </span>
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        align="start"
      >
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search cities..."
            value={inputValue}
            onValueChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="h-9"
          />
          <CommandList>
            {isLoading ? (
              <div className="flex items-center gap-2 px-2 py-3">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm text-muted-foreground">
                  Loading...
                </span>
              </div>
            ) : error ? (
              <div className="px-2 py-3">
                <span className="text-sm text-destructive">
                  Error fetching cities
                </span>
              </div>
            ) : inputValue.length <= 1 ? (
              <div className="px-2 py-3">
                <span className="text-sm text-muted-foreground">
                  Type to search cities...
                </span>
              </div>
            ) : (
              <>
                <CommandEmpty>No locality found.</CommandEmpty>
                <CommandGroup>
                  {filteredCities.map((city) => (
                    <CommandItem
                      key={city.id}
                      value={city.name}
                      onSelect={() => handleSelect(city)}
                      className="cursor-pointer"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selected?.id === city.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {city.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LocalityCombobox;
