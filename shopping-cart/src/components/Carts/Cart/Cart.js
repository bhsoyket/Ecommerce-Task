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
							<img src={props.item.image} alt="" />
						</div>
						<div className={classes.ProductInfo}>
							<p className={classes.Name}>{props.item.name}</p>
							<p className={classes.Quantity}>{props.item.unit}</p>
						</div>
					</Col>
					<Col md="5" className={classes.CartItemMT}>
						<Input type="number" className={classes.QuantityInput} />
						<span className={classes.OrderProductPrice}>&#2547;&nbsp;{props.item.price}</span>
					</Col>
					<Col md="1"  className={classes.DeleteCartItem}>
						<i onClick={()=>props.RemoveToCard(props.item._id)} className="fas fa-times-circle"></i>
					</Col>
				</Row>
			</div>
		</Aux>
	);
}
