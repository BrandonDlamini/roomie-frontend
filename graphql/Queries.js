import gql from "graphql-tag";

const VIEW_ALL_ROOMIES = gql`
query {
    viewAllRoomies{
        email,
        phoneNumber,
        description,
        area,
        imageUrl,
}`;
