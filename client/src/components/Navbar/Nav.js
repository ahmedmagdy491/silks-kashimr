import React from 'react';
import {
	Navbar,
	Button,
	Form,
	FormControl,
	Nav,
	Container,
} from 'react-bootstrap';
import './assets/navbar.css';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

const NavItems = () => {
	let links = ['home', 'about', 'shop', 'contact'];

	return (
		<Nav
			className="mr-auto ml-auto my-2 my-lg-0"
			style={{ maxHeight: '100px' }}
			navbarScroll
		>
			{links &&
				links.map((link) => (
					<Nav.Link>
						<Link
							to={`/${link.toLowerCase()}`}
							className="links text-decoration-none"
						>
							{link}
						</Link>
					</Nav.Link>
				))}
			<DropDown />
		</Nav>
	);
};

export default NavItems;
