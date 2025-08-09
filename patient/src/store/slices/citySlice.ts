import { defaultCities } from "@/data/cities";
import { City } from "@/types/search-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CityState {
  selectedCity: City;
}

const initialState: CityState = {
  selectedCity: defaultCities[0],
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<City>) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { setSelectedCity } = citySlice.actions;
export default citySlice.reducer;
