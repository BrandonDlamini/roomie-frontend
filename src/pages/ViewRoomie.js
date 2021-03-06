import react from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/typography/Welcome";
import { GET_ROOMIE } from "../graphql/Queries";
import { useQuery } from "@apollo/react-hooks";

const ViewRoomie = (props) => {
  const { loading, data, error } = useQuery(GET_ROOMIE, {
    variables: { roomieId: props.id },
  });
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

  const roomie = data.getRoomie;
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Welcome />
      <div className=" mt-8 mb-7 flex flex-wrap w-1/2 justify-center m-auto shadow-lg">
        <img
          src="https://i.ibb.co/5RvVnkL/3.jpg"
          alt="Roomate"
          className="h-1/5 w-full object-cover"
        />
        <div className="bg-rmPurple text-white w-full flex flex flex-wrap justify-center p-1 text-xl font-bold font-mont">
          <p className="text-shadow-sm uppercase">{roomie.area}</p>
        </div>
        <div className="flex flex-wrap w-full justify-items-start font-mont px-4">
          <h1 className="text-base  font-semibold pt-4">Description:</h1>
          <br></br>
          <p className="text-base font-light py-2">{roomie.description}</p>
        </div>
        <div className="flex flex-wrap w-full justify-around px-4">
          <div className=" w-1/2 pr-1 mb-5">
            <p className=" text-base font-bold">Name: {roomie.name}</p>
            <p className=" text-base font-bold">Email: {roomie.email}</p>
          </div>
          <div className=" w-1/2 mb-5">
            <p className=" text-base font-bold">
              Contact: {roomie.phoneNumber}:
            </p>
            <p className=" text-base font-bold">Area: {roomie.area}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRoomie;
