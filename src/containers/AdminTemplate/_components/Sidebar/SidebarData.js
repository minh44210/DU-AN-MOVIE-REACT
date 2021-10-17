import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
	{
		title: "Home",
		path: "/dashboard",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Films",
		path: "/dashboard/films",
		icon: <IoIcons.IoIosFilm />,
		cName: "nav-text",
	},
	{
		title: "User",
		path: "/dashboard/user",
		icon: <FaIcons.FaUser />,
		cName: "nav-text",
	},

];
