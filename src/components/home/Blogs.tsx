import Blog from 'components/common/Blog';
import useAsync from 'hooks/useAsync';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AdminService from 'services/AdminService';
import ProductSkeleton from 'skeletons/ProductSkeleton';

const Blogs = () => {

    const { data, isLoading } = useAsync(AdminService.getBlogs)

    return (
        <div className='my-5'>
            <Container>
                <h2 className='mb-4 text-center'>Blogs</h2>
                {isLoading && <ProductSkeleton />}
                {
                    !isLoading && <Row>
                        {
                            data?.map((blog => <Blog key={blog._id} blog={blog} />))
                        }
                    </Row>
                }
            </Container>
        </div>
    );
};

export default Blogs;