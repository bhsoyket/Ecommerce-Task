import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Product.module.css";
import { Row, Col } from "reactstrap";

export default function Product(props) {
	return (
		<Aux>
			<Col xs="6" sm="6" md="4">
				<div className={classes.Product}>
					<div className={classes.Image}>
						<img src={props.product.image} alt="" />
					</div>

					<p className={classes.Name}>{props.product.name}</p>
					<p className={classes.Quantity}>
						Quantity: {props.product.quantity}
					</p>
					<Row>
						<Col xs="6" sm="6" md="6">
							<p className={classes.Price}>
								&#2547;&nbsp;{props.product.price.toFixed(2)}
							</p>
						</Col>
						<Col xs="6" sm="6" md="6">
							<div className={classes.Cart}>
								<i class="fas fa-cart-plus"></i>
							</div>
						</Col>
					</Row>
				</div>
			</Col>
		</Aux>
	);
}
