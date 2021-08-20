import { UserContext } from 'App';
import React, { useContext, useEffect, useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import requests from 'services/httpService';
import OrderService from 'services/OrderService';
import { IBookingData } from 'types';

const OrderStatus = ({ order }: { order: IBookingData }) => {
    // console.log(order)
    const [orderStatus, setOrderStatus] = useState(order.status);
    const [btnVariant, setBtnVariant] = useState('danger')
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        requests.post(`/isAdmin`, { email: loggedInUser.email })
            .then(data => setIsAdmin(data))
    }, [loggedInUser])

    useEffect(() => {
        // console.log(orderStatus)
        let variant = 'danger'
        if (orderStatus === 'done') {
            variant = 'success'
        } else if (orderStatus === 'inprogress') {
            variant = 'warning'
        }
        setBtnVariant(variant)
    }, [orderStatus])

    const handleChangeStatus = (status: string) => {
        OrderService.updateOrderStatus((order._id) as string, { status })

            .then(result => {
                if (result) {
                    setOrderStatus(status)
                }
            })

    }

    return (
        <DropdownButton variant={btnVariant} id="dropdown-basic-button" title={orderStatus}>
            {isAdmin ? <>
                <Dropdown.Item className="rounded bg-danger" onClick={() => handleChangeStatus('pending')}>pending</Dropdown.Item>
                <Dropdown.Item className="rounded bg-warning" onClick={() => handleChangeStatus('inprogress')}>inprogress</Dropdown.Item>
                <Dropdown.Item className="rounded bg-success" onClick={() => handleChangeStatus('done')}>done</Dropdown.Item>
            </>
                :
                <Dropdown.Item className="rounded bg-danger">You are not an admin!</Dropdown.Item>
            }

        </DropdownButton>
    );
};

export default OrderStatus;