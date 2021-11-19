import react from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/typography/Welcome";

const ViewRoomie = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Welcome />
      <div className=" mt-8  border-2 border-black flex flex-wrap w-1/2 justify-center m-auto ">
        <img
          src="https://i.ibb.co/5RvVnkL/3.jpg"
          alt="Roomate"
          className="h-1/5 w-full object-cover"
        />
        <div className="bg-rmPurple text-white w-full flex flex flex-wrap justify-center p-1 text-xl font-bold font-mont">
          <p>HATFIELD</p>
        </div>
        <div className="flex flex-wrap w-full justify-items-start font-mont px-4">
          <h1 className="text-base  font-semibold pt-4">Description</h1>
          <p className="text-base font-light py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            eros felis. Duis interdum elit non laoreet laoreet. Vivamus non
            tempus lectus. In sit amet rhoncus sem.
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-around px-4">
          <div className=" w-1/2 border-2 border-red-600 pr-1">
            <p className=" text-base font-bold">Name:</p>
            <p className=" text-base font-bold">Email:</p>
          </div>
          <div className=" w-1/2 border-2 border-red-600">
            <p className=" text-base font-bold">Phone:</p>
            <p className=" text-base font-bold">Area:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRoomie;
