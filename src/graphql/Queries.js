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

export const GET_ROOMIE = gql`
  query getRoomie($roomieId: String) {
    getRoomie(roomieId: $roomieId) {
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
