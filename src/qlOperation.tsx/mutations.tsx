import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $contactNumber: String!
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      contactNumber: $contactNumber
    ) {
      result {
        name
        email
        password
        contactNumber
      }
      token
      errorMessage
      status
    }
  }
`;

export const DELETE_USERS = gql`
  mutation {
    DeleteUser(_id: "63f346ca1009d8fd23140a20") {
      email
      password
      contactNumber
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login: Login(email: $email, password: $password) {
      result {
        email
        password
      }
      token
      errorMessage
      status
    }
  }
`;
