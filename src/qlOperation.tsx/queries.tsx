import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    users {
      name
      password
      contactNumber
      email
    }
  }
`;

export const GET_CURRENT_USER = gql`
  {
    currentUser {
      name
      email
      password
      contactNumber
    }
  }
`;


