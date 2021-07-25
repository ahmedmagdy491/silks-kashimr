import React, { useState, useEffect } from 'react';
import './orderScreen.css';
import { PayPalButton } from 'react-paypal-button-v2';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader/Loader';
import {
	deliverOrder,
	getOrderDetails,
	payOrder,
	addNote,
} from '../../actions/orderAction.js';
import { Fragment } from 'react';

const OrderScreen = ({ match, history }) => {
	const orderId = match.params.id;

	const [note, setNote] = useState('');
	const [skip, setSkip] = useState(false);

	const dispatch = useDispatch();

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;

	const orderPay = useSelector((state) => state.orderPay);
	const { loading: loadingPay, success: successPay } = orderPay;

	const orderDeliver = useSelector((state) => state.orderDeliver);
	const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

	const userLogin = useSelector((state) => state.userLogin);

	if (!loading) {
		//   Calculate prices
		const addDecimals = (num) => {
			return (Math.round(num * 100) / 100).toFixed(2);
		};

		if (order) {
			order.itemsPrice = addDecimals(
				order.orderItems.reduce(
					(acc, item) =>
						acc + item.discountPrice
							? item.discountPrice
							: item.originalPrice * item.qty,
					0
				)
			);
		}
	}

	useEffect(() => {
		if (!userLogin) {
			history.push('/login');
		}

		if (!order || successPay || successDeliver || order._id !== orderId) {
			dispatch({ type: 'ORDER_PAY_RESET' });
			dispatch({ type: 'ORDER_DELIVER_RESET' });
			dispatch(getOrderDetails(orderId));
		}
	}, [
		dispatch,
		orderId,
		successPay,
		order,
		history,
		userLogin,
		successDeliver,
	]);

	const successPaymentHandler = async (paymentResult, data) => {
		try {
			console.log('payment' + paymentResult);
			dispatch(payOrder(orderId, paymentResult));
			return fetch('/paypal-transaction-complete', {
				method: 'post',
				body: JSON.stringify({
					orderID: data.orderID,
				}),
			});
		} catch (error) {
			console.log('error' + error);
		}
	};

	const deliverHandler = () => {
		dispatch(deliverOrder(order));
	};

	const submitNoteHandler = (e) => {
		e.preventDefault();
		dispatch(addNote(orderId, note));
		console.log(note);
	};

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<>
			<h1>Order {order._id}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong>Name: </strong> {order.user.name}
							</p>
							<p>
								<strong>Email: </strong>{' '}
								<a href={`mailto:${order.user.email}`}>
									{order.user.email}
								</a>
							</p>
							<p>
								<strong>Address: </strong>
								{order.shippingAddress.address},{' '}
								{order.shippingAddress.city}{' '}
								{order.shippingAddress.postalCode},{' '}
								{order.shippingAddress.country}
							</p>
							{order.isDelivered ? (
								<Message variant="success">
									Delivered on {order.deliveredAt}
								</Message>
							) : (
								<Message variant="danger">
									Not Delivered
								</Message>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>Method: </strong>
								{order.paymentMethod}
							</p>
							{order.isPaid ? (
								<Message variant="success">
									Paid on {order.paidAt}
								</Message>
							) : (
								<Message variant="danger">Not Paid</Message>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Order Items</h2>
							{order.orderItems.length === 0 ? (
								<Message>Order is empty</Message>
							) : (
								<ListGroup variant="flush">
									{order.orderItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
														rounded
													/>
												</Col>
												<Col>
													<Link
														to={`/product/${item.product}`}
													>
														{item.name}
													</Link>
												</Col>
												<Col md={4}>
													{item.qty} x $ (
													{item.discountPrice
														? item.discountPrice
														: item.originalPrice}
													) = $
													{(
														item.qty *
														(item.discountPrice
															? item.discountPrice
															: item.originalPrice)
													).toFixed(2)}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>${order.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>${order.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${order.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>${order.totalPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								{
									<div className="note">
										<label htmlFor="message">
											Do you have any notes
										</label>
										<textarea
											name="message"
											id="message"
											rows="4"
											cols="50"
											value={note}
											onChange={(e) =>
												setNote(e.target.value)
											}
										></textarea>
										<button
											type="submit"
											onClick={submitNoteHandler}
										>
											Submit
										</button>
										<button
											type="submit"
											onClick={() => setSkip(true)}
										>
											Skip
										</button>
									</div>
								}
							</ListGroup.Item>
							{!order.isPaid && (
								<ListGroup.Item>
									{loadingPay && <Loader />}
									{
										<PayPalButton
											amount={order.totalPrice}
											onSuccess={successPaymentHandler}
											options={{
												clientId:
													'AadkgopSfK3_OtaYe4jNcPK-A8uV3RrJelTKG7DMwFJlNeuR3pOBHyMJKjrx8ELwIGLNfir_EGD8UeYk',
												secret: 'EC3cP_qqosipFrKb-emG4_KniWit_3aGc4_iC7z6FAINmGiGuqN6eWk8NsdXW_4lPL3uc8ANZ0DVfvqp',
											}}
											disable-funding
										/>
									}
								</ListGroup.Item>
							)}
							{loadingDeliver && <Loader />}
							{userLogin &&
								userLogin.role === 'admin' &&
								order.isPaid &&
								!order.isDelivered && (
									<ListGroup.Item>
										<Button
											type="button"
											className="btn btn-block"
											onClick={deliverHandler}
										>
											Mark As Delivered
										</Button>
									</ListGroup.Item>
								)}
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default OrderScreen;
