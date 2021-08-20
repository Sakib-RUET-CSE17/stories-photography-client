import React from 'react';
import { useForm } from 'react-hook-form';
import { IBookingData, ILoggedInUser, IProduct } from 'types';



interface IProps {
    product: IProduct;
    loggedInUser: ILoggedInUser;
    setBookingData: React.Dispatch<React.SetStateAction<IBookingData>>;
}

const BookingForm = ({ product, loggedInUser, setBookingData }: IProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: IBookingData) => {
        // console.log(data)
        data.orderTime = new Date();
        data.product = product;
        data.status = "pending";
        setBookingData(data);
    };

    return (
        <>
            <h1>Check Out</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" defaultValue={loggedInUser.name || loggedInUser.displayName} {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                {errors.name && <span className="error">Name is required</span>}

                <input type="text" defaultValue={loggedInUser.email} {...register('email', { required: true })} placeholder="Your Email" className="form-control" />
                {errors.email && <span className="error">Email is required</span>}

                <input type="text" {...register("address", { required: true })} placeholder="Your Address" className="form-control" />
                {errors.name && <span className="error">Address is required</span>}

                <input type="text" defaultValue='+88' {...register("phone", { required: true })} placeholder="Your Phone" className="form-control" />
                {errors.name && <span className="error">Phone is required</span>}

                <h5>{product.title} - BDT {product.price}</h5>
                <input type="submit" value="Confirm" />
            </form>
        </>
    );
};

export default BookingForm;