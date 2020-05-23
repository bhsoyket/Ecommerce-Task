import React from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Cart.module.css";
import { Row, Col, Input } from "reactstrap";

export default function Carts(props) {
	return (
		<Aux>
			<div className={classes.Cart}>
				<Row>
					<Col xs="3" sm="3" md="3">
						<i class="far fa-heart"></i>
						<div className={classes.Image}>
							<img src="" alt="" />
						</div>
					</Col>
					<Col xs="3" sm="3" md="3">
						<p className={classes.Name}>Onion</p>
						<p className={classes.Quantity}>1KG</p>
					</Col>
					<Col xs="2" sm="2" md="2">
						<Input type="number" value="1" />
					</Col>
					<Col xs="3" sm="3" md="3">
						<p className={classes.Price}>&#2547;&nbsp;40.00</p>
					</Col>
					<Col xs="1" sm="1" md="1">
						<i class="fas fa-times-circle"></i>
					</Col>
				</Row>
			</div>
		</Aux>
	);
}
