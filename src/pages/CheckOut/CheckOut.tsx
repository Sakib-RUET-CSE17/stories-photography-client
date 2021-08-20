import { UserContext } from 'App';
import BookingForm from 'components/checkOut/BookingForm';
import ProcessPayment from 'components/checkOut/ProcessPayment/ProcessPayment';
import useAsync from 'hooks/useAsync';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import OrderService from 'services/OrderService';
import ProductService from 'services/ProductService';
import { IBookingData, IProduct } from 'types';

interface IParams {
    id: string;
}

const CheckOut = () => {
    const { id } = useParams<IParams>();
    const { data, isLoading, isSuccess, isError, error } = useAsync<IProduct>(() => ProductService.getProductByID(id));
    const history = useHistory();

    const [loggedInUser] = useContext(UserContext);
    const [bookingData, setBookingData] = useState<IBookingData>(null as unknown as IBookingData)

    const handlePaymentSuccess = (paymentId: string) => {
        const orderDetails = {
            ...bookingData,
            paymentId,
        }

        OrderService.addOrder(orderDetails)
            .then(res => {
                alert('Order Placed Successfully');
                history.push('/orderList');
            })
    }

    return (
        <div className='product__details__component my-3'>
            <Container>
                <div className="wrapper bg-white rounded border p-5">
                    {
                        isLoading && <h3>Loading ...</h3>
                    }
                    {
                        isSuccess &&
                        <>
                            <div style={{ display: bookingData ? 'none' : 'block' }}>
                                <BookingForm product={data as IProduct} loggedInUser={loggedInUser} setBookingData={setBookingData} />
                            </div>
                            <div style={{ display: bookingData ? 'block' : 'none' }}>
                                <h2>Please Pay BDT {data?.price}</h2>
                                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                            </div>
                        </>
                    }
                    {isError && <h1>{error}</h1>}
                </div>
            </Container>
        </div>
    );
};

export default CheckOut;