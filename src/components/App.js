import React, { Component } from "react";
import logo from "./../logo.svg";
import "./../styles/App.css";
import Navbar from "./Navbar";
import Roomie from "./Roomie";
import { GET_ALL_ROOMIES } from "../graphql/Queries";
import { useQuery } from "@apollo/react-hooks";

function App() {
  const { loading, data, error } = useQuery(GET_ALL_ROOMIES);
  if (loading)
    return (
      <div>
        <p>loading</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p className="text-red-700">{error}</p>
      </div>
    );
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
        {data.getAllRoomies.map((roomie) => (
          <Roomie key={roomie.roomieId} name={roomie.name} area={roomie.area} />
        ))}
        <Roomie />
      </div>
    </div>
  );
}

export default App;
