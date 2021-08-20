import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { IBookingData } from 'types';

const Order = ({ order }: { order: IBookingData }) => {
    const { product, orderTime, status } = order;
    const { image, title, price } = product;
    let date=new Date(orderTime);


    return (
        <Col md={3} className='mb-3'>

            <Card className='h-100'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <small>৳ {price}</small><br />
                    <small>Order Time: {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</small>
                </Card.Body>
                <Card.Footer>
                    {status}
                </Card.Footer>
            </Card>

        </Col>
    );
};

export default Order;