import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Product.module.css";
import { Row, Col } from "reactstrap";

export default function Product(props) {
	return (
		<Aux>
			<Col xs="6" sm="6" md="4">
				<div className={classes.Product}>
					<div className={classes.Fav}>
						<i className="far fa-heart"></i>
					</div>
					<div className={classes.Image}>
						<img src={props.product.image} alt="" />
					</div>

					<Row className="p-5">
						<Col md="12">
							<p className={classes.Name}>{props.product.name}</p>
							<p className={classes.Quantity}>
								Quantity: {props.product.unit}
							</p>
						</Col>
					</Row>
					<Row className="p-5">
						<Col xs="6" sm="6" md="6">
							<p className={classes.Price}>
								<b>&#2547;&nbsp;{props.product.price.toFixed(2)}</b>
							</p>
						</Col>
						<Col xs="6" sm="6" md="6" className="text-right">
							<div onClick={()=>props.addToCard(props.product._id)} className={classes.Cart}>
								<i className="fas fa-cart-plus"></i>
							</div>
						</Col>
					</Row>
				</div>
			</Col>
		</Aux>
	);
}
