import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Image, Col } from 'react-bootstrap';
import './Categories.css';
const Category = ({ image, name, slug }) => {
	return (
		<Col className="flex-grow-0">
			<Link to={`/${slug}/products`} className="text-decoration">
				<div className="image-container">
					<Image className="cat-image" src={image} />
					<h5 className="text-dark text-center pt-2">{name}</h5>
				</div>
			</Link>
		</Col>
	);
};

export default Category;
