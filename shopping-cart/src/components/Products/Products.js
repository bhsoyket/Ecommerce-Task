import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Product from "../../components/Product/Product";
import classes from "./Products.module.css";
import { Row } from "reactstrap";

export default class Products extends Component {
	state = {
		Products: [
			{
				name: "Onion",
				quantity: "1KG",
				price: 45,
				image: "onion.jpg",
			},
			{
				name: "Onion",
				quantity: "1KG",
				price: 45,
				image: "onion.jpg",
			},
			{
				name: "Onion",
				quantity: "1KG",
				price: 45,
				image: "onion.jpg",
			},
			{
				name: "Onion",
				quantity: "1KG",
				price: 45,
				image: "onion.jpg",
			},
			{
				name: "Onion",
				quantity: "1KG",
				price: 45,
				image: "onion.jpg",
			},
			{
				name: "Onion",
				quantity: "1KG",
				price: 45,
				image: "onion.jpg",
			},
			{
				name: "Onion",
				quantity: "1KG",
				price: 45,
				image: "onion.jpg",
			},
		],
	};
	render() {
		return (
			<Aux>
                <p className={classes.Title}>Your Products</p>
				<Row>
					{this.state.Products.map((prod) => {
						return <Product product={prod} />;
					})}
				</Row>
			</Aux>
		);
	}
}
