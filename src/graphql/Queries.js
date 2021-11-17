import gql from "graphql-tag";

export const GET_ALL_ROOMIES = gql`
  query getAllRoomies {
    getAllRoomies {
      roomieId
      name
      email
      phoneNumber
      description
      area
      imageUrl
    }
  }
`;
