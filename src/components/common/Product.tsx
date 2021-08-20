import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProduct } from 'types';

interface IProps {
    product: IProduct;
}

const Product = ({ product }: IProps) => {
    const { title, image, price, _id } = product;

    return (
        <Col md={3} className='mb-3'>

            <Card className='h-100'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>৳ {price}</p>
                    <Link to={`/product/${_id}`}>
                        <button className='me-2 btn btn-dark'>
                            View More
                        </button>
                    </Link>
                    <Link to={`/buy/${_id}`}>
                    <button className='ms-4 btn btn-primary'>
                        Buy Now
                    </button>
                    </Link>
                </Card.Body>
            </Card>

        </Col>
    );
};

export default Product;