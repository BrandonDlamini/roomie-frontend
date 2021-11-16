import React, { Component } from "react";
import logo from "./../logo.svg";
import "./../styles/App.css";
import Navbar from "./Navbar";
import Roomie from "./Roomie";

function App() {
  return (
    <div class="bg-gray-50">
      <Navbar />
      <div className="pt-36 ">
        <h1 className="font-mont text-4xl text-center font-bold text-gray-600 ">
          WELCOME TO ROOMIE
        </h1>
        <p className="font-mont font-medium text-sm text-center text-gray-600">
          {" "}
          The platform for finding your next roomate
        </p>
      </div>
      <div className="mx-3.5 mt-8 p-12 gap-8 border-4 border-red-600 flex flex-wrap justify-center ">
        <div>
          <Roomie />
        </div>
        <div>
          <Roomie />
        </div>
        <div>
          <Roomie />
        </div>
      </div>
    </div>
  );
}

export default App;
