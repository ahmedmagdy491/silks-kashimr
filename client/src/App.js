import React, { Fragment, useState } from 'react';
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
import ProductDetails from './pages/Products/Product Details/ProductDetails';
import Products from './pages/Products/Products/Products';
import AdminMenu from './components/Admin/Menu/AdminMenu';
import Create from './components/Admin/Forms/Category/Create';
import Cart from './pages/Cart/Cart';
import CreateProduct from './components/Admin/Forms/Product.js/Create';
import OrderScreen from './pages/Order/OrderScreen';
import ShippingScreen from './pages/Shipping/ShippingScreen';
import PaymentScreen from './pages/Payment/PaymentScreen';
import PlaceOrderScreen from './pages/Place Order/PlaceOrderScreen';
import OrderListScreen from './pages/Order List/OrderListScreen';

const App = () => {
	const [productVisible, setProductVisible] = useState(false);
	const [catVisible, setCatVisible] = useState(false);
	const showProductDrawer = () => {
		setProductVisible(true);
	};
	const showCatDrawer = () => {
		setCatVisible(true);
	};

	const onProductClose = () => {
		setProductVisible(false);
	};
	const onCatClose = () => {
		setCatVisible(false);
	};
	return (
		<Fragment>
			<Router>
				<Header />
				<AdminMenu
					showProductDrawer={showProductDrawer}
					showCatDrawer={showCatDrawer}
					onProductClose={onProductClose}
					onCatClose={onCatClose}
				/>
				<Create onCatClose={onCatClose} visible={catVisible} />
				<CreateProduct
					onProductClose={onProductClose}
					visible={productVisible}
				/>
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
					<Route path="/:slug/products" component={Products} exact />
					<Route
						path="/:catSlug/:productSlug"
						component={ProductDetails}
						exact
					/>

					<Route path="/cart/:slug?" component={Cart} exact />
					<Route path="/order/:id" component={OrderScreen} exact />
					<Route path="/shipping" component={ShippingScreen} exact />
					<Route path="/payment" component={PaymentScreen} exact />
					<Route path="/placeorder" component={PlaceOrderScreen} />
					<Route path="/orderlist" component={OrderListScreen} />
				</Container>
			</Router>
		</Fragment>
	);
};
export default App;
