import useAsync from 'hooks/useAsync';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AdminService from 'services/AdminService';
import { IBlogData } from 'types';

interface IParams {
    id: string;
}

const ReadBlog = () => {
    const { id } = useParams<IParams>();
    const { data, isLoading, isSuccess, isError, error } = useAsync<IBlogData>(() => AdminService.getBlogByID(id));
    const { title, blog, author, date } = (data || {}) as IBlogData;
    const localDate = new Date(date).toLocaleDateString();

    return (
        <div className='read__blog__component my-3'>
            <Container>
                <div className="wrapper bg-white rounded border p-5">
                    {
                        isLoading && <h3>Loading ...</h3>
                    }
                    {
                        isSuccess && <>
                            <h3 className='mb-3'>{title}</h3>
                            <h6>{author}</h6>
                            <small>{localDate}</small>

                            <p className="mt-5">{blog}</p>
                        </>
                    }
                    {isError && <h1>{error}</h1>}
                </div>
            </Container>
        </div>
    );
};

export default ReadBlog;