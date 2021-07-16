import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
	AiOutlineRight,
	AiOutlineFileAdd,
	AiOutlineEdit,
	AiOutlineMenuUnfold,
	AiOutlineMenuFold,
} from 'react-icons/ai';
import './AdminMenu.css';

const { SubMenu } = Menu;
const AdminMenu = () => {
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div style={{ width: 256 }} id="menu">
			<Button
				id="collapse"
				onClick={toggleCollapsed}
				style={{ marginBottom: 16 }}
			>
				{React.createElement(
					collapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold
				)}
			</Button>
			<Menu
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				theme="dark"
				inlineCollapsed={collapsed}
				id="options"
			>
				<SubMenu
					key="sub1"
					icon={<AiOutlineRight />}
					title="Navigation One"
				>
					<Menu.Item key="5" icon={<AiOutlineFileAdd />}>
						Create Category
					</Menu.Item>
					<Menu.Item key="6" icon={<AiOutlineEdit />}>
						Edit Category
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub2"
					icon={<AiOutlineRight />}
					title="Navigation Two"
					id="options"
				>
					<Menu.Item key="9" icon={<AiOutlineFileAdd />}>
						Create Product
					</Menu.Item>
					<Menu.Item key="10" icon={<AiOutlineEdit />}>
						Edit Product
					</Menu.Item>
				</SubMenu>
			</Menu>
		</div>
	);
};

export default AdminMenu;
