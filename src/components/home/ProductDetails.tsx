import useAsync from 'hooks/useAsync';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ProductService from 'services/ProductService';
import { IProduct } from 'types';
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface IParams {
    id: string;
}

const ProductDetails = () => {
    const { id } = useParams<IParams>();
    const { data, isLoading, isSuccess, isError, error } = useAsync<IProduct>(() => ProductService.getProductByID(id));
    const { title, image, description, price } = (data || {}) as IProduct;
    return (
        <div className='product__details__component my-3'>
            <Container>
                <div className="wrapper bg-white rounded border p-5">
                    {
                        isLoading && <h3>Loading ...</h3>
                    }
                    {
                        isSuccess && <Row>
                            <Col md={8}>
                                <img className="img-fluid" src={image} alt={title} />
                            </Col >
                            <Col md={4}>
                                <h3 className='mb-3'>{title}</h3>
                                <h1>৳ {price}</h1>
                                <Link to={`/buy/${id}`}>
                                    <button className='btn btn-primary'>
                                        <AiOutlineShoppingCart />
                                        Buy Now
                                    </button>
                                </Link>
                                <p className="mt-5">{description}</p>
                            </Col>
                        </Row>
                    }
                    {isError && <h1>{error}</h1>}
                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;