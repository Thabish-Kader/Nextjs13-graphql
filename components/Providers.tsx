"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const client = new ApolloClient({
		uri: "http://localhost:3000/api/graphql",
		cache: new InMemoryCache(),
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
