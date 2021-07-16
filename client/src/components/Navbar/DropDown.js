import React, { Fragment } from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import './assets/navbar.css';

const DropDown = () => {
	let links = ['checkout', 'cart', 'profile', 'logout'];
	const menu = (
		<Fragment>
			{links &&
				links.map((link) => (
					<Menu>
						<Menu.Item>
							<Link to={`/${link}`}>{link}</Link>
						</Menu.Item>
					</Menu>
				))}
		</Fragment>
	);
	return (
		<Dropdown overlay={menu} placement="bottomCenter">
			<Button className="drop-down">MY ACCOUNT</Button>
		</Dropdown>
	);
};

export default DropDown;
