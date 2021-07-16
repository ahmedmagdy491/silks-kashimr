import React, { Fragment } from 'react';
import Header from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/landing page/Landing';
import Panner from './components/Panner/Panner';
import CreateCategory from './pages/Categories/CreateCategory';
import SignUpScreen from './pages/SignUpScreen/SignUpScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import UserEditScreen from './pages/EditUserScreen/EditUserScreen';
import UserListScreen from './pages/UserListScreen/UserListScreen';
import CreateProducts from './pages/Products/Create Product/CreateProducts';
import ProductDetails from './pages/Products/Product Details/ProductDetails';
import Products from './pages/Products/Products/Products';
import AdminMenu from './components/Admin/Menu/AdminMenu';
import Create from './components/Admin/Forms/Category/Create';
import Cart from './pages/Cart/Cart';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Header />
				<AdminMenu />
				<Create />
				<Container className="mt-5">
					<Route path="/home" component={LandingPage} exact />
					<Route path="/signup" component={SignUpScreen} />
					<Route path="/login" component={LoginScreen} />
					<Route
						path="./admin/user/:id/edit"
						component={UserEditScreen}
					/>
					<Route path="/admin/userlist" component={UserListScreen} />
					<Route path="/createcat" component={CreateCategory} exact />
					<Route
						path="/createproduct"
						component={CreateProducts}
						exact
					/>
					<Route path="/:slug/products" component={Products} exact />
					<Route
						path="/:catSlug/:productSlug"
						component={ProductDetails}
						exact
					/>

					<Route path="/cart/:slug?" component={Cart} exact />
				</Container>
			</Router>
		</Fragment>
	);
};
export default App;
