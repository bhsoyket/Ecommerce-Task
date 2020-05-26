import React, { Component } from "react";
import axios from "axios";
import Products from "../Products/Products";
import Carts from "../Carts/Carts";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import { Container, Row, Col } from "reactstrap";

export default class Layout extends Component {
	state = {
		Products: [],
		cardItems: [],
		totalPrice: 0,
	};

	componentDidMount() {
		this.getProducts();
	}

	getProducts = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/api/product"
			);
			const resProducts = response.data.data;
			this.setState({ ...this.state, Products: resProducts });
		} catch (error) {
			console.error(error);
		}
	};

	addToCard = (id) => {
		const checkDuplicate = this.state.cardItems.find(
			(item) => item._id === id
		);
		if (!checkDuplicate) {
			const item = this.state.Products.find((item) => item._id === id);
			const oldItems = this.state.cardItems;
			const newItems = [item, ...oldItems];
			const oldPrice = this.state.totalPrice;
			const newPrice = oldPrice + item.price
			this.setState({ ...this.state, cardItems: newItems, totalPrice: newPrice });
		}
		// return;
	};

	RemoveToCard = (id) => {
		const oldItems = this.state.cardItems;
		const item = oldItems.find((item) => item._id === id);
		const removeItem = oldItems.filter((item) => item._id !== id);		
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - item.price
		this.setState({ ...this.state, cardItems: removeItem, totalPrice: newPrice });
	};

	clearCard = () => {
		this.setState({ ...this.state, cardItems: [], totalPrice: 0, });
	};

	render() {
		return (
			<Aux>
				<div className={classes.Header}> </div>
				<Container>
					<Row>
						<Col xs="6" sm="8" md="9">
							<Products
								Products={this.state.Products}
								addToCard={this.addToCard}
							/>
						</Col>
						<Col xs="6" sm="4" md="3">
							<Carts
								items={this.state.cardItems}
								totalPrice={this.state.totalPrice}
								RemoveToCard={this.RemoveToCard}
								clearCard={this.clearCard}
							/>
						</Col>
					</Row>
				</Container>
			</Aux>
		);
	}
}
