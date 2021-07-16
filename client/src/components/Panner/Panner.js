import React, { useEffect, useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './Panner.css';

const Panner = ({ cats }) => {
	const contentStyle = {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
	};
	return (
		<Carousel fade className="panner">
			{cats.map((cat) => (
				<Carousel.Item>
					<Image
						className="d-block w-100 carousel-image"
						src={cat.image}
						alt={cat.name}
						roundedCircle
					/>
					<Carousel.Caption>
						<h3>{cat.name}</h3>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Panner;
