import React from 'react';
import { BiEuro } from 'react-icons/bi';
import { Row, Col } from 'react-bootstrap';
import Rating from '../../../components/Ratings/Ratings';

const Details = ({ product }) => {
	return (
		<Col>
			<Row className="justify-content-around">
				<div className="h5">{product.name}</div>
				<div className="h5 row align-items-center">
					{product.price}
					{'  '}

					<BiEuro className="mt-1" />
				</div>
			</Row>
			<Row className="justify-content-center h5">
				<div>
					<Rating value={product.rating} />
				</div>
			</Row>
		</Col>
	);
};

export default Details;
