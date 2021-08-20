import Blog from 'components/common/Blog';
import Sidebar from 'components/common/Sidebar';
import useAsync from 'hooks/useAsync';
import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import AdminService from 'services/AdminService';
import ProductSkeleton from 'skeletons/ProductSkeleton';

const DeleteBlog = () => {
    const { data, isLoading } = useAsync(AdminService.getBlogs)

    const handleDelete = (id: string) => {
        AdminService.deleteBlog(id)
            .then(res => {
                const card: HTMLElement = document.getElementById(id) as HTMLElement;
                card.innerHTML = "";
            })
    }

    return (
        <>
            <Sidebar />
            <div style={{ position: 'absolute', left: '94px', right: '0' }}>
                <h2 className='mb-4'>Delete Blog</h2>
                {isLoading && <ProductSkeleton />}
                {
                    !isLoading && <Row>
                        {
                            data?.map((blog => <Blog key={blog._id} blog={blog}>
                                <Card.Footer className='text-center'>
                                    <Button onClick={() => handleDelete(blog._id as string)}>Delete</Button>
                                </Card.Footer>
                            </Blog>))
                        }
                    </Row>
                }
            </div>
        </>
    );
};

export default DeleteBlog;