// // "use client";

// // import {
// //   Combobox,
// //   HStack,
// //   Portal,
// //   Span,
// //   Spinner,
// //   Avatar,
// //   useListCollection,
// //   InputGroup,
// // } from "@chakra-ui/react";
// // import { useState } from "react";
// // import { searchResults } from "@/data/search-response";
// // import { SearchEntity } from "@/type/search-types";
// // import { Search } from "lucide-react";

// // const SearchEntityCombobox = () => {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const { collection, set } = useListCollection<SearchEntity>({
// //     initialItems: [],
// //     itemToString: (item) => {
// //       if (item.type === "speciality") return item.speciality;
// //       if (item.type === "clinic") return item.clinic.name;
// //       if (item.type === "doctor") return item.doctor.name;
// //       return "";
// //     },
// //     itemToValue: (item) => JSON.stringify(item),
// //   });

// //   const handleInputChange = (term: string) => {
// //     setIsLoading(true);
// //     setError("");

// //     setTimeout(() => {
// //       try {
// //         const result = searchResults.filter((item) => {
// //           if (item.type === "speciality") {
// //             return item.speciality.toLowerCase().includes(term.toLowerCase());
// //           }
// //           if (item.type === "doctor") {
// //             return item.doctor.name.toLowerCase().includes(term.toLowerCase());
// //           }
// //           if (item.type === "clinic") {
// //             return item.clinic.name.toLowerCase().includes(term.toLowerCase());
// //           }
// //           return false;
// //         });
// //         set(result); // update collection here
// //       } catch (err) {
// //         setError("Failed to fetch results");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }, 1500); // artificial delay
// //   };

// //   // Group items manually from current collection
// //   const grouped = {
// //     speciality: [] as SearchEntity[],
// //     doctor: [] as SearchEntity[],
// //     clinic: [] as SearchEntity[],
// //   };

// //   collection.items.forEach((item) => {
// //     grouped[item.type].push(item);
// //   });

// //   return (
// //     <Combobox.Root
// //       collection={collection}
// //       width="auto"
// //       placeholder="Search doctors, clinics, specialities..."
// //       onInputValueChange={(e) => handleInputChange(e.inputValue)}
// //       positioning={{ sameWidth: true, placement: "bottom-start" }}
// //     >
// //       <Combobox.Control>
// //         <InputGroup startElement={<Search size={20} />}>
// //           <Combobox.Input
// //             outline="none"
// //             border={"none"}
// //             paddingRight={12}
// //             textOverflow={"ellipsis"}
// //             placeholder="Search doctors, clinics, specialities..."
// //             className="placeholder-gray-400 font-semibold"
// //           />
// //         </InputGroup>
// //         <Combobox.IndicatorGroup>
// //           <Combobox.ClearTrigger />
// //           <Combobox.Trigger />
// //         </Combobox.IndicatorGroup>
// //       </Combobox.Control>

// //       <Portal>
// //         <Combobox.Positioner zIndex="popover">
// //           <Combobox.Content minW="md">
// //             {isLoading ? (
// //               <HStack p="2">
// //                 <Spinner size="xs" borderWidth="1px" />
// //                 <Span>Loading...</Span>
// //               </HStack>
// //             ) : error ? (
// //               <Span p="2" color="fg.error">
// //                 {error}
// //               </Span>
// //             ) : collection.items.length === 0 ? (
// //               <Span p="2" color="fg.subtle">
// //                 No results found.
// //               </Span>
// //             ) : (
// //               Object.entries(grouped).map(([type, group]) =>
// //                 group.length ? (
// //                   <div key={type}>
// //                     <Span
// //                       px="3"
// //                       py="1"
// //                       fontWeight="semibold"
// //                       fontSize="sm"
// //                       color="fg.subtle"
// //                     >
// //                       {type.charAt(0).toUpperCase() + type.slice(1)}
// //                     </Span>
// //                     {group.map((item) => (
// //                       <Combobox.Item key={JSON.stringify(item)} item={item}>
// //                         <HStack gap="2" py="1" px="2" align="center">
// //                           {item.type === "doctor" && (
// //                             <Avatar.Root variant={"subtle"} color={"gray.700"}>
// //                               <Avatar.Fallback name={item.doctor.name} />
// //                               <Avatar.Image src={item.doctor.img} />
// //                             </Avatar.Root>
// //                           )}
// //                           <Span fontSize="sm" truncate>
// //                             {item.type === "speciality" && item.speciality}
// //                             {item.type === "clinic" &&
// //                               `${item.clinic.name} (${item.clinic.locality})`}
// //                             {item.type === "doctor" &&
// //                               `${item.doctor.name} (${item.doctor.speciality})`}
// //                           </Span>
// //                         </HStack>
// //                         <Combobox.ItemIndicator />
// //                       </Combobox.Item>
// //                     ))}
// //                   </div>
// //                 ) : null
// //               )
// //             )}
// //           </Combobox.Content>
// //         </Combobox.Positioner>
// //       </Portal>
// //     </Combobox.Root>
// //   );
// // };

// // export default SearchEntityCombobox;

// "use client";

// import { useState } from "react";
// import { Search, Loader2, Stethoscope, Building2, User } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { searchResults } from "@/data/search-response";
// import { SearchEntity } from "@/types/search-types";

// const GlobalSearchCombobox = () => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState<SearchEntity | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [filteredResults, setFilteredResults] = useState<SearchEntity[]>([]);
//   const [inputValue, setInputValue] = useState("");

//   const getItemString = (item: SearchEntity): string => {
//     if (item.type === "speciality") return item.speciality;
//     if (item.type === "clinic") return item.clinic.name;
//     if (item.type === "doctor") return item.doctor.name;
//     return "";
//   };

//   const getDisplayText = (item: SearchEntity): string => {
//     if (item.type === "speciality") return item.speciality;
//     if (item.type === "clinic")
//       return `${item.clinic.name} (${item.clinic.locality})`;
//     if (item.type === "doctor")
//       return `${item.doctor.name} (${item.doctor.speciality})`;
//     return "";
//   };

//   const handleInputChange = (term: string) => {
//     setInputValue(term);

//     if (term.length === 0) {
//       setFilteredResults([]);
//       return;
//     }

//     setIsLoading(true);
//     setError("");

//     setTimeout(() => {
//       try {
//         const result = searchResults.filter((item) => {
//           if (item.type === "speciality") {
//             return item.speciality.toLowerCase().includes(term.toLowerCase());
//           }
//           if (item.type === "doctor") {
//             return item.doctor.name.toLowerCase().includes(term.toLowerCase());
//           }
//           if (item.type === "clinic") {
//             return item.clinic.name.toLowerCase().includes(term.toLowerCase());
//           }
//           return false;
//         });
//         setFilteredResults(result);
//       } catch (err) {
//         setError("Failed to fetch results");
//       } finally {
//         setIsLoading(false);
//       }
//     }, 1500);
//   };

//   const handleSelect = (item: SearchEntity) => {
//     console.log("Selected:", item);
//     setSelected(item);
//     setOpen(false);
//     setInputValue("");
//   };

//   // Group items by type
//   const grouped = {
//     speciality: [] as SearchEntity[],
//     doctor: [] as SearchEntity[],
//     clinic: [] as SearchEntity[],
//   };

//   filteredResults.forEach((item) => {
//     grouped[item.type].push(item);
//   });

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case "doctor":
//         return <User className="h-4 w-4" />;
//       case "clinic":
//         return <Building2 className="h-4 w-4" />;
//       case "speciality":
//         return <Stethoscope className="h-4 w-4" />;
//       default:
//         return null;
//     }
//   };

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="ghost"
//           role="combobox"
//           aria-expanded={open}
//           className="w-full justify-between h-11 px-3 py-2 text-sm font-normal bg-transparent border-none outline-none focus-visible:ring-0"
//         >
//           <div className="flex items-center gap-2 flex-1 min-w-0">
//             <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
//             <span className="truncate text-left">
//               {selected
//                 ? getDisplayText(selected)
//                 : "Search doctors, clinics, specialities..."}
//             </span>
//           </div>
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent
//         className="w-[--radix-popover-trigger-width] p-0"
//         align="start"
//       >
//         <Command shouldFilter={false}>
//           <CommandInput
//             placeholder="Search doctors, clinics, specialities..."
//             value={inputValue}
//             onValueChange={handleInputChange}
//             className="h-9"
//           />
//           <CommandList className="max-h-[400px]">
//             {isLoading ? (
//               <div className="flex items-center gap-2 px-2 py-3">
//                 <Loader2 className="h-4 w-4 animate-spin" />
//                 <span className="text-sm text-muted-foreground">
//                   Loading...
//                 </span>
//               </div>
//             ) : error ? (
//               <div className="px-2 py-3">
//                 <span className="text-sm text-destructive">{error}</span>
//               </div>
//             ) : inputValue.length === 0 ? (
//               <div className="px-2 py-3">
//                 <span className="text-sm text-muted-foreground">
//                   Start typing to search...
//                 </span>
//               </div>
//             ) : filteredResults.length === 0 ? (
//               <CommandEmpty>No results found.</CommandEmpty>
//             ) : (
//               Object.entries(grouped).map(([type, group]) =>
//                 group.length > 0 ? (
//                   <CommandGroup
//                     key={type}
//                     heading={
//                       <div className="flex items-center gap-2">
//                         {getTypeIcon(type)}
//                         <span>
//                           {type.charAt(0).toUpperCase() + type.slice(1)}
//                         </span>
//                       </div>
//                     }
//                   >
//                     {group.map((item, index) => (
//                       <CommandItem
//                         key={`${type}-${index}`}
//                         value={getItemString(item)}
//                         onSelect={() => handleSelect(item)}
//                         className="cursor-pointer"
//                       >
//                         <div className="flex items-center gap-2 w-full">
//                           {item.type === "doctor" && (
//                             <Avatar className="h-8 w-8">
//                               <AvatarImage
//                                 src={item.doctor.img || "/placeholder.svg"}
//                                 alt={item.doctor.name}
//                               />
//                               <AvatarFallback className="text-xs">
//                                 {getInitials(item.doctor.name)}
//                               </AvatarFallback>
//                             </Avatar>
//                           )}
//                           <span className="text-sm truncate flex-1">
//                             {getDisplayText(item)}
//                           </span>
//                         </div>
//                       </CommandItem>
//                     ))}
//                   </CommandGroup>
//                 ) : null
//               )
//             )}
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default GlobalSearchCombobox;

// "use client";

// import {
//   Combobox,
//   HStack,
//   Portal,
//   Span,
//   Spinner,
//   Avatar,
//   useListCollection,
//   InputGroup,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { searchResults } from "@/data/search-response";
// import { SearchEntity } from "@/type/search-types";
// import { Search } from "lucide-react";

// const SearchEntityCombobox = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { collection, set } = useListCollection<SearchEntity>({
//     initialItems: [],
//     itemToString: (item) => {
//       if (item.type === "speciality") return item.speciality;
//       if (item.type === "clinic") return item.clinic.name;
//       if (item.type === "doctor") return item.doctor.name;
//       return "";
//     },
//     itemToValue: (item) => JSON.stringify(item),
//   });

//   const handleInputChange = (term: string) => {
//     setIsLoading(true);
//     setError("");

//     setTimeout(() => {
//       try {
//         const result = searchResults.filter((item) => {
//           if (item.type === "speciality") {
//             return item.speciality.toLowerCase().includes(term.toLowerCase());
//           }
//           if (item.type === "doctor") {
//             return item.doctor.name.toLowerCase().includes(term.toLowerCase());
//           }
//           if (item.type === "clinic") {
//             return item.clinic.name.toLowerCase().includes(term.toLowerCase());
//           }
//           return false;
//         });
//         set(result); // update collection here
//       } catch (err) {
//         setError("Failed to fetch results");
//       } finally {
//         setIsLoading(false);
//       }
//     }, 1500); // artificial delay
//   };

//   // Group items manually from current collection
//   const grouped = {
//     speciality: [] as SearchEntity[],
//     doctor: [] as SearchEntity[],
//     clinic: [] as SearchEntity[],
//   };

//   collection.items.forEach((item) => {
//     grouped[item.type].push(item);
//   });

//   return (
//     <Combobox.Root
//       collection={collection}
//       width="auto"
//       placeholder="Search doctors, clinics, specialities..."
//       onInputValueChange={(e) => handleInputChange(e.inputValue)}
//       positioning={{ sameWidth: true, placement: "bottom-start" }}
//     >
//       <Combobox.Control>
//         <InputGroup startElement={<Search size={20} />}>
//           <Combobox.Input
//             outline="none"
//             border={"none"}
//             paddingRight={12}
//             textOverflow={"ellipsis"}
//             placeholder="Search doctors, clinics, specialities..."
//             className="placeholder-gray-400 font-semibold"
//           />
//         </InputGroup>
//         <Combobox.IndicatorGroup>
//           <Combobox.ClearTrigger />
//           <Combobox.Trigger />
//         </Combobox.IndicatorGroup>
//       </Combobox.Control>

//       <Portal>
//         <Combobox.Positioner zIndex="popover">
//           <Combobox.Content minW="md">
//             {isLoading ? (
//               <HStack p="2">
//                 <Spinner size="xs" borderWidth="1px" />
//                 <Span>Loading...</Span>
//               </HStack>
//             ) : error ? (
//               <Span p="2" color="fg.error">
//                 {error}
//               </Span>
//             ) : collection.items.length === 0 ? (
//               <Span p="2" color="fg.subtle">
//                 No results found.
//               </Span>
//             ) : (
//               Object.entries(grouped).map(([type, group]) =>
//                 group.length ? (
//                   <div key={type}>
//                     <Span
//                       px="3"
//                       py="1"
//                       fontWeight="semibold"
//                       fontSize="sm"
//                       color="fg.subtle"
//                     >
//                       {type.charAt(0).toUpperCase() + type.slice(1)}
//                     </Span>
//                     {group.map((item) => (
//                       <Combobox.Item key={JSON.stringify(item)} item={item}>
//                         <HStack gap="2" py="1" px="2" align="center">
//                           {item.type === "doctor" && (
//                             <Avatar.Root variant={"subtle"} color={"gray.700"}>
//                               <Avatar.Fallback name={item.doctor.name} />
//                               <Avatar.Image src={item.doctor.img} />
//                             </Avatar.Root>
//                           )}
//                           <Span fontSize="sm" truncate>
//                             {item.type === "speciality" && item.speciality}
//                             {item.type === "clinic" &&
//                               `${item.clinic.name} (${item.clinic.locality})`}
//                             {item.type === "doctor" &&
//                               `${item.doctor.name} (${item.doctor.speciality})`}
//                           </Span>
//                         </HStack>
//                         <Combobox.ItemIndicator />
//                       </Combobox.Item>
//                     ))}
//                   </div>
//                 ) : null
//               )
//             )}
//           </Combobox.Content>
//         </Combobox.Positioner>
//       </Portal>
//     </Combobox.Root>
//   );
// };

// export default SearchEntityCombobox;

"use client";

import { useMemo, useState } from "react";
import { Search, Stethoscope, Building2, User, Loader2 } from "lucide-react";
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

import { SearchEntity } from "@/types/search-types";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { defaultCities } from "@/data/cities";
import Link from "next/link";

const base_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

const GlobalSearchCombobox = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<SearchEntity | null>(null);
  const [filteredResults, setFilteredResults] = useState<SearchEntity[] | []>(
    []
  );

  const value = selected ? selected.value : "";

  const { selectedCity } = useSelector((state: RootState) => state.city);

  const city = selectedCity ? selectedCity.label : defaultCities[0].label;

  const debouncedSearch = useDebouncedCallback(async (term: string) => {
    if (term.length < 2) return;
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${base_url}/search?city=${city}&query=${term}`
      );
      setFilteredResults(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setFilteredResults([]);
    } finally {
      setIsLoading(false);
    }
  }, 500);

  const handleSelect = (value: string) => {
    const selectedValue = filteredResults.find(
      (entity) => entity.value === value
    );
    if (selectedValue) setSelected(selectedValue);
    else setSelected(null);
    // setInputValue("");
  };

  const groupedResults = useMemo(() => {
    return filteredResults.reduce((acc, result) => {
      const type = result.type.toLowerCase();
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(result);
      return acc;
    }, {} as Record<string, SearchEntity[]>);
  }, [filteredResults]);

  return (
    <Combobox
      data={filteredResults}
      onOpenChange={setOpen}
      onValueChange={handleSelect}
      open={open}
      value={value}
      type="City"
    >
      <div className="flex items-center w-full relative">
        <Search size={20} className="absolute left-2 text-muted-foreground" />
        <ComboboxTrigger className="relative pl-10 w-full [&_svg]:hidden shadow-none bg-transparent border-none dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-0 ring-0" />
      </div>

      <ComboboxContent>
        <ComboboxInput
          placeholder="Search cities..."
          onChangeCapture={(e) => debouncedSearch(e.currentTarget.value)}
        />
        {/* <ComboboxEmpty>No cities found</ComboboxEmpty> */}
        <ComboboxList>
          <ComboboxEmpty>
            {isLoading ? (
              <div className="flex justify-center items-center p-4">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : (
              "No results found."
            )}
          </ComboboxEmpty>

          {/* rendering logic --- */}
          {groupedResults.speciality && (
            <ComboboxGroup
              heading={
                <div className="flex gapx-2">
                  <Stethoscope size={14} />{" "}
                  <span className="ml-2">Specialities</span>
                </div>
              }
            >
              {groupedResults.speciality.map((item) => (
                <Link
                  key={item.value}
                  href={`/${selectedCity.value}/${item.label}`}
                >
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                </Link>
              ))}
            </ComboboxGroup>
          )}
          {groupedResults.doctor && (
            <ComboboxGroup
              heading={
                <div className="flex gapx-2">
                  <User size={14} /> <span className="ml-2">Doctors</span>
                </div>
              }
            >
              {groupedResults.doctor.map((item) => (
                <Link
                  key={item.value}
                  href={`/${selectedCity.value}/doctor/${item.value}`}
                >
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                </Link>
              ))}
            </ComboboxGroup>
          )}
          {groupedResults.clinic && (
            <ComboboxGroup
              heading={
                <div className="flex gapx-2">
                  <Building2 size={14} /> <span className="ml-2">Clinics</span>
                </div>
              }
            >
              {groupedResults.clinic.map((item) => (
                <Link
                  key={item.value}
                  href={`/${selectedCity.value}/clinic/${item.value}`}
                >
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                </Link>
              ))}
            </ComboboxGroup>
          )}

          {/* <ComboboxGroup>
            {
              <>
                {filteredResults.find(
                  (result) => result.type == "SPECIALITY"
                ) && (
                  <>
                    <div className="flex items-center gap-x-2 font-chillax text-sm p-1 border-b-2 border-dashed">
                      <Stethoscope size={14} /> Speciality
                    </div>
                    {filteredResults
                      .filter((entity) => entity.type == "SPECIALITY")
                      .map((entity: SearchEntity) => {
                        return (
                          <>
                            <ComboboxItem
                              key={entity.value}
                              value={entity.value}
                            >
                              {entity.label}
                            </ComboboxItem>
                          </>
                        );
                      })}
                  </>
                )}

                <ComboboxSeparator />
                {filteredResults.find((result) => result.type == "DOCTOR") && (
                  <>
                    <div className="flex items-center gap-x-2 font-chillax text-sm p-1 border-b-2 border-dashed">
                      <User size={14} /> Doctors
                    </div>
                    {filteredResults
                      .filter((entity) => entity.type == "DOCTOR")
                      .map((entity: SearchEntity) => {
                        return (
                          <>
                            <ComboboxItem
                              key={entity.value}
                              value={entity.value}
                            >
                              {entity.label}
                            </ComboboxItem>
                          </>
                        );
                      })}
                  </>
                )}

                <ComboboxSeparator />
                {filteredResults.find((result) => result.type == "CLINIC") && (
                  <>
                    <div className="flex items-center gap-x-2 font-chillax text-sm p-1 border-b-2 border-dashed">
                      <Building2 size={14} /> Clinics
                    </div>
                    {filteredResults
                      .filter((entity) => entity.type == "CLINIC")
                      .map((entity: SearchEntity) => {
                        return (
                          <>
                            <ComboboxItem
                              key={entity.value}
                              value={entity.value}
                            >
                              {entity.label}
                            </ComboboxItem>
                          </>
                        );
                      })}
                  </>
                )}
              </>
            }
          </ComboboxGroup> */}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default GlobalSearchCombobox;
