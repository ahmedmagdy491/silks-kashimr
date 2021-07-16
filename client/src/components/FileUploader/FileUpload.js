import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const FileUpload = () => {
	const [fileList, setFileList] = useState([]);
	const onChange = ({ fileList: newFileList, event }) => {
		setFileList(newFileList);
		console.log(event);
	};

	const onPreview = async (file) => {
		let src = file.url;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow.document.write(image.outerHTML);
	};

	let url = `${process.env.REACT_APP_API}/uploadimages`;
	return (
		<>
			<ImgCrop rotate>
				<Upload
					action={url}
					listType="picture-card"
					fileList={fileList}
					onChange={onChange}
					onPreview={onPreview}
				>
					{fileList.length < 5 && '+ Upload'}
				</Upload>
			</ImgCrop>
		</>
	);
};

export default FileUpload;
