import React from "react";
import Aux from "../../hoc/Aux";
import Cart from "../Carts/Cart/Cart";
import classes from "./Carts.module.css";
import { Button, Row, Col } from "reactstrap";

export default function Carts(props) {
	return (
		<Aux>
			<div className={classes.Carts}>
				<Row className={classes.CartHeader}>
					<Col md="6">
						<p className={classes.Title}>Your Cards</p>
					</Col>
					<Col md="6" className="text-right">
						<p onClick={()=>props.clearCard()} className={classes.ClearBTN}>
							<i className="far fa-trash-alt"></i> Clear
						</p>
					</Col>
				</Row>

				{props.items.map((item, i) => {
					return (
						<Cart
							key={i}
							item={item}
							RemoveToCard={props.RemoveToCard}
						/>
					);
				})}

				<div className={classes.Footer}>
					<Row>
						<Col md="4">
							<Button className={classes.OrderBTN}>
								Place Order
							</Button>
						</Col>
						<Col md="8">
							<p className={classes.TotalPrice}>
								Grand Total: &#2547;&nbsp;{props.totalPrice.toFixed(2)}
							</p>
						</Col>
					</Row>
				</div>
			</div>
		</Aux>
	);
}
