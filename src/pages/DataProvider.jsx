import { createContext, useEffect } from "react";

export let Data = createContext()

const DataProvider = ({children}) => {return (
        <Data.Provider>
            {children}
        </Data.Provider>
    )
}