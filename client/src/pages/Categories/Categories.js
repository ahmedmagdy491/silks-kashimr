import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import { Row, Col } from 'antd';
import './Categories.css';
const Categories = ({ cats }) => {
	return (
		<div className="cats-row">
			{cats &&
				cats.map((cat) => (
					<Category
						image={cat.image}
						name={cat.name}
						slug={cat.slug}
						className="category"
					/>
				))}
		</div>
	);
};

export default Categories;
