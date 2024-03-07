import AppContext from "@/_lib/Context/contextApi";
import { useContext } from "react";

export const useGlobalContext = () => {
    return useContext(AppContext);
};