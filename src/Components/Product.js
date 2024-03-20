import React from 'react'

import img1 from '../images/13.jpg'
import img2 from '../images/13pro.jpg'
import img3 from '../images/13promax.jpg'
import img4 from '../images/14.jpg'
import img5 from '../images/14pro.jpg'
import img6 from '../images/14promax.jpg'
import img7 from '../images/15.jpg'
import img8 from '../images/x.jpg'
import img9 from '../images/se2022.jpg'
import img10 from '../images/12.jpg'
import img11 from '../images/Ip11.jpg'
import img12 from '../images/iPhone 12Pro.jpg'
import img13 from '../images/iphone 12 pro max.jpg'
import img14 from '../images/iPhone 11 Pro.jpg'
import img15 from '../images/iPhone 11ProMax.jpg'
import { Card, CardBody, CardFooter, CardImg, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const product = [
    {
        id: 1,
        image: img8,
        name: "iPhone X",
        price: "999.99"
    },

    {
        id: 2,
        image: img1,
        name: "iPhone 13",
        price: "1099.99"
    },

    {
        id: 3,
        image: img2,
        name: "iPhone 13 Pro",
        price: "1199.99"
    },

    {
        id: 4,
        image: img3,
        name: "iPhone 13 Pro Max",
        price: "1099.0"
    },

    {
        id: 5,
        image: img4,
        name: "iPhone 14 ",
        price: "1150.0"
    },

    {
        id: 6,
        image: img5,
        name: "iPhone 14 Pro",
        price: "1099.0"
    },

    {
        id: 7,
        image: img6,
        name: "iPhone 14 Pro Max",
        price: "1099.0"
    },

    {
        id: 8,
        image: img7,
        name: "iPhone 15 ",
        price: "5000.o"
    },

    {
        id: 9,
        image: img8,
        name: "iPhone SE",
        price: "399.99"
    },

    {
        id: 10,
        image: img9,
        name: "SE(2022)",
        price: "499.99"
    },

    {
        id: 11,
        image: img10,
        name: "Iphone 12",
        price: "5000.0"
    },

    {
        id: 12,
        image: img11,
        name: "Iphone 11",
        price: "5000.0"
    },

    {
        id: 13,
        image: img12,
        name: "Iphone 12Pro",
        price: "5120.0"
    },

    {
        id: 14,
        image: img13,
        name: "Iphone 12ProMax",
        price: "5120.0"
    },

    {
        id: 15,
        image: img14,
        name: "Iphone 11 Pro",
        price: "4902.0"
    },

    {
        id: 16,
        image: img15,
        name: "Iphone 11 ProMax",
        price: "5000.0"
    },
];

function Product() {
    return (
        <div className="py-5">
            <Container className="px-4 px-lg-5 mt-5">
                <Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        product.map(item => (
                            <Col className="mb-5">
                                <Card className="h-100">

                                    <CardImg style={{ height: `250px` }} src={item.image} />

                                    <CardBody className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{item.name}</h5>
                                            {item.price}
                                        </div>
                                    </CardBody>

                                    <CardFooter className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Product
