import { UserContext } from 'App';
import Sidebar from 'components/common/Sidebar';
import useAsync from 'hooks/useAsync';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import OrderService from 'services/OrderService';
import ProductSkeleton from 'skeletons/ProductSkeleton';
import Order from './Order';

const OrderList = () => {
    const [loggedInUser] = useContext(UserContext)
    const { data, isLoading } = useAsync(() => OrderService.getOrders(loggedInUser.email as string))

    return (
        <>
            <Sidebar />
            <div style={{ position: 'absolute', left: '94px', right: '0' }}>
                <h2 className='mb-4'>Order List</h2>
                {isLoading && <ProductSkeleton />}
                {
                    !isLoading && <Row>
                        {
                            data?.map((order => <Order key={order._id} order={order} />))
                        }
                    </Row>
                }
            </div>
        </>
    );
};

export default OrderList;