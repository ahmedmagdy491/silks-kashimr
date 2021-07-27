import React, { Fragment, useState } from 'react';
import { Drawer } from 'antd';
import { createCatAction } from '../../../../actions/catActions';
import { useDispatch, useSelector } from 'react-redux';
import ImgCrop from 'antd-img-crop';
import { AiOutlineInbox } from 'react-icons/ai';
import './Create.css';
import CatForm from './Form';
import FileUpload from './FileUpload';

const initialValues = {
	name: '',
	image: '',
};
const Create = ({ onCatClose, visible }) => {
	const [values, setValues] = useState(initialValues);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const { userLogin } = useSelector((state) => ({ ...state }));
	let dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createCatAction(userLogin.token, values));
	};
	return (
		<>
			<Drawer
				title="Create a new category"
				width={400}
				onClose={onCatClose}
				visible={visible}
				bodyStyle={{ paddingBottom: 80 }}
				className="drawer"
				footer={
					<div
						style={{
							textAlign: 'right',
						}}
					></div>
				}
			>
				<FileUpload setValues={setValues} values={values} />
				<CatForm
					handleChange={handleChange}
					values={values}
					handleSubmit={handleSubmit}
				/>
			</Drawer>
		</>
	);
};

export default Create;
