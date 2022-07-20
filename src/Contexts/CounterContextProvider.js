import React, { useState, createContext } from 'react';

 export const CounterContext = createContext();

const CounterContextProvider = ({children}) => {
    const [num, setNum] = useState(0);
    const val = {num, setNum};
    return (
        <CounterContext.Provider value={val}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContextProvider;