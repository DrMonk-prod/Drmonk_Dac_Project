"use client"; // This is the crucial line

import { Provider } from "react-redux";
import store from "../store/store"; // Adjust the import path if needed

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
