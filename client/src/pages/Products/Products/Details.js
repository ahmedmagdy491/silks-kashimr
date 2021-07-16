import React from 'react';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';

const Details = ({ product }) => {
	return (
		<div>
			<h5>{product.name}</h5>
			<h6 style={{ fontWeight: 'bold' }}>
				<RiMoneyEuroCircleLine
					style={{ fontSize: '1.5rem', color: '#591DA8' }}
				/>{' '}
				{product.price}
			</h6>
			<h6>ratings</h6>
		</div>
	);
};

export default Details;
