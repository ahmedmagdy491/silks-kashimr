import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const TabsLayout = ({ reviews, description }) => {
	return (
		<div className="mt-3">
			<Tabs tabPosition="left">
				<TabPane tab="Description" key="Description">
					{description}
				</TabPane>
				<TabPane tab="Reviews" key="Reviews">
					{reviews}
				</TabPane>
			</Tabs>
		</div>
	);
};

export default TabsLayout;
