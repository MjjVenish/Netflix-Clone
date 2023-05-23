import { useContext } from "react";
import { contextNetlix } from "../context/userContextProvider";

export const useUserContext = () => useContext(contextNetlix);
