"use client";
import { GET_NOVEL } from "@/graphql/queries";
import { INovel } from "@/typings";
import { useQuery } from "@apollo/client";
import React from "react";

const Novel = ({ params: { id } }: { params: { id: string } }) => {
	const { data, loading, error } = useQuery(GET_NOVEL, { variables: { id } });
	const novel: INovel = data?.novel;

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
		<article className=" text-white">
			<section className="flex gap-2 ">
				{novel.image && (
					<img height={200} width={200} src={novel.image} alt="" />
				)}

				<div className="p-2 flex flex-col">
					<h1 className="text-4xl ">Title : {novel.title}</h1>

					<div className="flex divide-x-2 space-x-4">
						{novel?.authors?.map((author) => (
							<h2 className="font-bold">{author.name}</h2>
						))}
					</div>
					<p className="text-slate-400 ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto cum nam sed voluptates sunt aliquid nemo
						maxime itaque tempora, autem alias nostrum molestiae
						deserunt earum animi numquam reprehenderit laboriosam
						libero? Quas, atque totam vero nostrum dolore, nihil
						autem neque architecto deserunt illo itaque, ab quae
						ipsam corrupti ipsum quaerat? Sed hic ipsum excepturi
						earum minus consectetur soluta totam temporibus libero.
					</p>
					<div className="mt-5 space-x-2">
						<button className="border p-2 rounded-lg">
							Add Author
						</button>
					</div>
				</div>
			</section>
		</article>
	);
};

export default Novel;
