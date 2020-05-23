import React from "react";
import Products from "../../containers/Products/Products";
import Carts from "../Carts/Carts";
import Aux from "../../hoc/Aux";
import classes from './Layout.module.css';
import { Container, Row, Col } from 'reactstrap';

const Layout = (props) => (
	<Aux>
        <div className={classes.Header}> Header </div>
		<Container>
            <Row>
                <Col xs="6" sm="8" md="9">
                    <Products />
                </Col>
                <Col xs="6" sm="4" md="3">
                    <Carts />
                </Col>
            </Row>
        </Container>
	</Aux>
);

export default Layout;