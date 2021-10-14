import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Films',
		path: "/films",
		icon: <IoIcons.IoIosFilm />,
		cName: 'nav-text'

	},
	{
		title: 'User',
		path: "/user",
		icon: <FaIcons.FaUser />,
		cName: 'nav-text'
	}
];