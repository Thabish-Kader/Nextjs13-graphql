import React from "react";
import { GoPlus } from "react-icons/go";
export const Header = () => {
	return (
		<nav className="flex flex-col p-2 max-w-5xl mx-auto">
			<h1 className="text-5xl text-white text-center">
				Top{" "}
				<span className="underline underline-offset-8 decoration-red-500">
					Books{" "}
				</span>
				Of All Time
			</h1>

			<div className="flex justify-between text-white mt-10 px-5">
				<h2>Top</h2>
				<h2>Best Selling</h2>
				<h2>This Week</h2>
				<h2>Upcoming</h2>
				<h2>New</h2>
			</div>
		</nav>
	);
};
