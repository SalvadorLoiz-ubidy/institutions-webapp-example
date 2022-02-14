import React from "react";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { initializeApollo, addApolloState } from "lib/apolloClient";
import { NextPageContext } from "next";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      fullname
      username
      phone_number
      city
    }
  }
`;

const users = ({ data }: any) => {
  const router = useRouter();

  return (
    <button className="button" onClick={() => router.push("/")}>
      users
    </button>
  );
};

export default users;

users.getInitialProps = async (context: NextPageContext) => {
  const apolloClient = initializeApollo({ headers: context?.req?.headers });

  const { data } = await apolloClient.query({
    query: GET_USERS,
  });

  return addApolloState(apolloClient, {
    data,
  });
};
