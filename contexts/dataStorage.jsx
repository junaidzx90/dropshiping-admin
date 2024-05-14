"use client"

import { getUserData } from "@/lib";

const { createContext, useContext, useState, useEffect } = require("react");

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [collapse, setCollapse] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const initialData = async () => {
            setCollapse(window.localStorage.getItem("sidepanel") == "true");
            const userData = await getUserData();
            if(userData){
                setUserData(JSON.parse(userData));
            }
        }
        initialData();
    }, []);
    
    const handleMenuPanel = async() => {
        window.localStorage.setItem("sidepanel", !collapse);
        setCollapse(!collapse);
    }

    return(
        <DataContext.Provider value={{handleMenuPanel, collapse, userData}}>
            {children}
        </DataContext.Provider>
    )
}

export const ContextData = () => {
    return useContext(DataContext);
}