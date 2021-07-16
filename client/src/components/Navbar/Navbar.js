import React from 'react';
import './assets/navbar.css';
import mail from './assets/icons/fluent_mail-28-regular.png';
import phone from './assets/icons/akar-icons_phone.png';
import facebook from './assets/icons/facebook.png';
import twitter from './assets/icons/et_twitter.png';
import instagram from './assets/icons/ion_logo-instagram.png';
import {
	Navbar,
	Button,
	Form,
	FormControl,
	TabContainer,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import NavItems from './Nav';
const Header = () => {
	return (
		<Navbar
			bg="light"
			expand="lg"
			sticky="top"
			className="nav menu-desktop  fixed animated slideInDown"
		>
			<TabContainer>
				<Navbar.Brand>
					<Link to="/home">LOGO</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<NavItems />
					<Form className="d-flex justify-content-between">
						<Button className="shop mr-4">SHOP</Button>
						<Button className="account">ACCOUNT</Button>
					</Form>
				</Navbar.Collapse>
			</TabContainer>
		</Navbar>
	);
};

export default Header;
