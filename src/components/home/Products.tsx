import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductSkeleton from 'skeletons/ProductSkeleton';
import { IProduct } from 'types';

interface IProps {
    products: IProduct[] | null,
    isLoading: boolean
}

const Products = ({ products, isLoading }: IProps) => {
    // console.log(products)
    return (
        <div className='my-5'>
            <Container>
                <h2 className='mb-4'>Our Services</h2>
                {isLoading && <ProductSkeleton />}
                {
                    !isLoading && <Row>
                        {
                            products?.map((product => <Product key={product._id} product={product} />))
                        }
                    </Row>
                }
            </Container>
        </div>
    );
};

export default Products;