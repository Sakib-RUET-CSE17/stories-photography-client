import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = () => {
    return (
        <Row>
            {
                Array(12).fill('').map((col, index) => <Col md={3} className='mb-3' key={index}>
                    <Skeleton style={{ borderRadius: 10 }} height={320} />
                </Col>)
            }
        </Row>
    );
};

export default ProductSkeleton;