import React from "react";
import Aux from "../../hoc/Aux";
import Cart from "../Carts/Cart/Cart";
import classes from "./Carts.module.css";
import { Button } from "reactstrap";

export default function Carts() {
	return (
		<Aux>
			<div className={classes.Carts}>
				<p className={classes.Title}>Your Cards</p>
				<Cart />
				<div lassName={classes.Footer}>
					<Button >Place Order</Button>
					<p>Grand Total: &#2547;&nbsp;40.00</p>
				</div>
			</div>
		</Aux>
	);
}
