import { useQuery, useMutation } from "@apollo/client";

import { GET_ALL_USERS } from "../qlOperation.tsx/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  //   const delete = useMutation(DELETE_USERS);
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }

  if (data) {
    console.log(data);
  }

  return <h1>Welcome to the Home page</h1>;
}
