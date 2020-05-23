import React from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Cart.module.css";
import { Row, Col, Input } from "reactstrap";

export default function Carts(props) {
	return (
		<Aux>
			<div className={classes.Cart}>
				<Row>
					<Col md="5">
						<div className={classes.Image}>
							<img src="https://picsum.photos/40" alt="" />
						</div>
						<div className={classes.ProductInfo}>
							<p className={classes.Name}>Onion</p>
							<p className={classes.Quantity}>1KG</p>
						</div>
					</Col>
					<Col md="5" className={classes.CartItemMT}>
						<input type="number" className={classes.QuantityInput} />
						<span className={classes.OrderProductPrice}>&#2547;&nbsp;40.00</span>
					</Col>
					<Col md="1"  className={classes.DeleteCartItem}>
						<a href=""><i class="fas fa-times-circle"></i></a>
					</Col>
				</Row>
			</div>
		</Aux>
	);
}
