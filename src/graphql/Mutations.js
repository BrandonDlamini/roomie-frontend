import gql from "graphql-tag";

export const ADD_ROOMIE = gql`
  mutation addRoomie(
    $name: String!
    $email: String!
    $phoneNumber: String!
    $description: String!
    $area: String!
    $imageUrl: String
  ) {
    addRoomie(
      name: $name
      email: $email
      phoneNumber: $phoneNumber
      description: $description
      area: $area
      imageUrl: $imageUrl
    )
  }
`;
