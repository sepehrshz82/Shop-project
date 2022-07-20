import React, { useState, createContext } from 'react';

 export const TotalContext = createContext();

const TotalContextProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    const val = {total, setTotal};
    return (
        <TotalContext.Provider value={val}>
            {children}
        </TotalContext.Provider>
    );
};

export default TotalContextProvider;