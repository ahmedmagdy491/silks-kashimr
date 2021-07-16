import React, { Fragment, useState } from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import FileUpload from '../../../FileUploader/FileUpload';

const Create = () => {
	const [visible, setVisible] = useState(true);

	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = (e) => {
		setVisible(false);
	};

	return (
		<>
			<Button type="primary" onClick={showDrawer}>
				<AiOutlinePlus /> New Category
			</Button>
			<Drawer
				title="Create a new category"
				width={720}
				onClose={onClose}
				visible={visible}
				bodyStyle={{ paddingBottom: 80 }}
				footer={
					<div
						style={{
							textAlign: 'right',
						}}
					>
						<Button onClick={onClose} style={{ marginRight: 8 }}>
							Cancel
						</Button>
						<Button onClick={onClose} type="primary">
							Submit
						</Button>
					</div>
				}
			>
				<Form layout="vertical" hideRequiredMark>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="name"
								label="Name"
								rules={[
									{
										required: true,
										message: 'Please enter category name',
									},
								]}
							>
								<Input placeholder="Please enter category name" />
							</Form.Item>
						</Col>
					</Row>
				</Form>
				<FileUpload />
			</Drawer>
		</>
	);
};

export default Create;
