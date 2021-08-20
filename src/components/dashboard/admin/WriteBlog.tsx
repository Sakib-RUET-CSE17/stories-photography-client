import { UserContext } from 'App';
import Sidebar from 'components/common/Sidebar';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AdminService from 'services/AdminService';

const WriteBlog = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser] = useContext(UserContext);

    const onSubmit = (data: { title: string; blog: string; }, e: any) => {
        const blogData = {
            ...data,
            date: new Date(),
            author: (loggedInUser.name || loggedInUser.displayName) as string,
        }
        AdminService.addBlog(blogData)
            .then(res => {
                if (res) {
                    alert('Added Successfully');
                    e.target.reset()
                } else {
                    alert('Something Wrong!');
                }
            })
    }

    return (
        <>
            <Sidebar />
            <div style={{ position: 'absolute', left: '94px', right: '0' }}>
                <h1>Write Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" placeholder='Title' {...register("title")} />
                    <br />
                    <textarea rows={10} className="form-control" placeholder='Write your blog...' {...register("blog")} />
                    <br />
                    <input className="btn btn-dark" type="submit" />
                </form>
            </div>
        </>
    );
};

export default WriteBlog;