import Sidebar from 'components/common/Sidebar';
import React from 'react';
import { useForm } from 'react-hook-form';
import AdminService from 'services/AdminService';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: { email: string }, e: any) => {

        AdminService.addAdmin(data)
            .then(res => {
                if (res) {
                    alert('New Admin Added Successfully');
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
                <h1>Make Admin</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" placeholder='Email' {...register("email")} />
                    <br />
                    <input className="btn btn-dark" type="submit" />
                </form>
            </div>
        </>
    );
};

export default MakeAdmin;