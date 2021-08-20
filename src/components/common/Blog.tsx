import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IBlogData } from 'types';

const Blog = ({ blog, children }: { blog: IBlogData, children?: any }) => {
    const { _id, title, date, author } = blog;
    const localDate = (new Date(date)).toLocaleDateString();
    return (
        <Col id={_id} md={3} className='mb-3'>

            <Card className='h-100'>
                <h6 className="text-primary text-center">{author}</h6>
                <small className="text-center">{localDate}</small>
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <small>{blog.blog.slice(0, 99)}...<Link to={`/blog/${_id}`}>Read More</Link></small><br />
                </Card.Body>
                {children}
            </Card>

        </Col>
    );
};

export default Blog;