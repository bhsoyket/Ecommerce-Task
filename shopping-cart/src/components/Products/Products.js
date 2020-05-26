import React from 'react';
import Aux from "../../hoc/Aux";
import Product from "../Product/Product";
import classes from "./Products.module.css";
import { Row } from "reactstrap";

const Products = (props) => {
	return (
		<Aux>
			<p className={classes.Title}>Your Products</p>
			<Row>
				{props.Products.map((prod, i) => {
					return (<Product 
						key={i} 
						product={prod}
						addToCard={props.addToCard}
						/>);
				})}
			</Row>
		</Aux>
	);
}

export default Products;
