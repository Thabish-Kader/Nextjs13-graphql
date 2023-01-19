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
		</nav>
	);
};
