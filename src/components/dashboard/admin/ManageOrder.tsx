import { UserContext } from 'App';
import Sidebar from 'components/common/Sidebar';
import useAsync from 'hooks/useAsync';
import React, { useContext } from 'react';
import OrderService from 'services/OrderService';
import { IBookingData } from 'types';
import OrderTable from './OrderTable';

const ManageOrder = () => {
    const [loggedInUser] = useContext(UserContext)
    const { data, isLoading } = useAsync(() => OrderService.getOrders(loggedInUser.email as string))

    return (
        <>
            <Sidebar />
            <div style={{ position: 'absolute', left: '94px', right: '0' }} >
                <h2 className='mb-4'>Order List</h2>
                {isLoading && <h3>Loading...</h3>}
                {
                    !isLoading && <OrderTable orders={data as IBookingData[]} />
                }
            </div>
        </>
    );
};

export default ManageOrder;