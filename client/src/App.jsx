import { useState } from "react";
import "./App.css";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import {useMutation} from 'react-query'
import { fetchResponse } from "./api";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ChatPage from "./ChatPage";

function App() {
  

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bot" element={<ChatPage/>} />
      </Routes>
    </div>
  );
}

export default App;
