import React from 'react';
import {Route, Routes, Navigate, BrowserRouter} from "react-router-dom";
import Products from './Products';
import Detail from './Detail';
import Login from './Form/login';
import Signup from './Form/signup';
import ProductContextProvider from './Contexts/ProductContextProvider';
import CounterContextProvider from './Contexts/CounterContextProvider';
import TotalContextProvider from './Contexts/TotalContextProvider';
function App() {
  return (
    <>
    <BrowserRouter>
    <ProductContextProvider>
    <CounterContextProvider> 
    <TotalContextProvider> 
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/products/:id" element={<Detail/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/" element={<Navigate to="/products"/>}/>
    </Routes>
    </TotalContextProvider>
    </CounterContextProvider>
    </ProductContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;