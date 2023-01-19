"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_NOVELS } from "@/graphql/queries";

import { INovel } from "@/typings";
import { Novel } from "./Novel";
import { Header } from "./Header";

export const Novels = () => {
	const { data, loading, error } = useQuery(GET_NOVELS);

	const novels: INovel[] = data?.novels;

	if (loading)
		return (
			<p className="text-white flex items-center justify-center">
				Loading ....
			</p>
		);
	if (error)
		return (
			<p className="text-white flex items-center justify-center">
				Oops! Something went wrong ....
			</p>
		);

	return (
		<div className="grid grid-cols-4 gap-2">
			{novels.map((novel) => (
				<Novel key={novel.id} novel={novel} />
			))}
		</div>
	);
};
