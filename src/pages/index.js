import react from "react";
import Navbar from "../components/Navbar";
import Roomie from "../components/Roomie";
import Welcome from "../components/typography/Welcome";
import { GET_ALL_ROOMIES } from "../graphql/Queries";
import { useQuery } from "@apollo/react-hooks";

const Index = () => {
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
      <Welcome />

      <div className="mx-3.5 mt-8 p-12 gap-8 border-4 border-red-600 flex flex-wrap justify-center ">
        {data.getAllRoomies.map((roomie) => (
          <Roomie key={roomie.roomieId} name={roomie.name} area={roomie.area} />
        ))}
        <Roomie />
      </div>
    </div>
  );
};

export default Index;
