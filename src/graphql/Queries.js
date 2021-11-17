import gql from "graphql-tag";

export const GET_ALL_ROOMIES = gql`
query getAllRoomies{
    getAllRoomies {
        email
        phoneNumber
        description
        area
        imageUrl
}`;
