import React, { useEffect, Fragment } from 'react';
import Panner from '../../components/Panner/Panner';
import Categories from '../../pages/Categories/Categories';
import { listCats } from '../../actions/catActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import './assets/landingPage.css';
const Landing = () => {
	const dispatch = useDispatch();
	const { catList } = useSelector((state) => ({ ...state }));
	const { loading, error, cats } = catList;

	useEffect(() => {
		dispatch(listCats());
	}, [dispatch]);
	console.log(cats);
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<div className="landing">
					<div className="panner-container">
						<Panner cats={cats} className="panner" />
					</div>
					<Categories cats={cats} className="categories" />
				</div>
			)}
		</Fragment>
	);
};

export default Landing;
