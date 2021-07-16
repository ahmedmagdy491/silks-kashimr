import React from 'react';
import { Image } from 'antd';
import { Col } from 'react-bootstrap';
import Details from './Details';
import DetailsTable from './Table/DetailsTable';

const AppoveScreen = ({ productInfo }) => {
	return (
		<div className="row align-items-center justify-content-between">
			<Col xs={6} md={6} height={344}>
				<Image width={400} height={400} src={productInfo.image} />
			</Col>
			<Col xs={6} md={6}>
				<Details productInfo={productInfo} />
				<DetailsTable productInfo={productInfo} />
			</Col>
		</div>
	);
};

export default AppoveScreen;
