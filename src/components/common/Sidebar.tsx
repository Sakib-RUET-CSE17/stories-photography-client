import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaCalendar, FaPlus,FaBlogger } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'
import { FiDelete } from 'react-icons/fi'
import { MdRateReview } from 'react-icons/md'
import { UserContext } from 'App';
import requests from 'services/httpService';

const Sidebar = () => {
    const history = useHistory();
    const [active] = useState(history.location.pathname.slice(1))
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        requests.post(`/isAdmin`, { email: loggedInUser.email })
            .then(data => setIsAdmin(data))
    }, [loggedInUser])

    // console.log(isAdmin)

    return (
        <div className='sidebar__component'>
            {isAdmin ? <>
                <li>
                    <Link to='/manageOrders'>
                        <div style={{ background: active === 'manageOrders' ? '#7D48B1' : '' }} className='center'>
                            {/* <Image width={30} height={30} src='/images/dashboard.svg' alt="" /> */}
                            <FaCalendar />
                            <br />
                            <small>Manage Order</small>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/addProduct'>
                        <div style={{ background: active === 'addProduct' ? '#7D48B1' : '' }} className='center'>
                            {/* <Image width={30} height={30} src='/images/dashboard.svg' alt="" /> */}
                            <FaPlus />
                            <br />
                            <small>Add Service</small>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/makeAdmin'>
                        <div style={{ background: active === 'makeAdmin' ? '#7D48B1' : '' }} className='center'>
                            {/* <Image width={30} height={30} src='/images/dashboard.svg' alt="" /> */}
                            <GrUserAdmin />
                            <br />
                            <small>Make Admin</small>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/writeBlog'>
                        <div style={{ background: active === 'writeBlog' ? '#7D48B1' : '' }} className='center'>
                            {/* <Image width={30} height={30} src='/images/dashboard.svg' alt="" /> */}
                            <FaBlogger />
                            <br />
                            <small>Write Blog</small>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/deleteBlog'>
                        <div style={{ background: active === 'deleteBlog' ? '#7D48B1' : '' }} className='center'>
                            {/* <Image width={30} height={30} src='/images/dashboard.svg' alt="" /> */}
                            <FiDelete />
                            <br />
                            <small>Delete Blog</small>
                        </div>
                    </Link>
                </li>
            </>
                : <>
                    <li>
                        <Link to='/orderList'>
                            <div style={{ background: active === 'orderList' ? '#7D48B1' : '' }} className='center'>
                                {/* <Image width={30} height={30} src='/images/dashboard.svg' alt="" /> */}
                                <FaCalendar />
                                <br />
                                <small>Order List</small>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/addReview'>
                            <div style={{ background: active === 'addReview' ? '#7D48B1' : '' }} className='center'>
                                {/* <Image width={30} height={30} src='/images/dashboard.svg' alt="" /> */}
                                <MdRateReview />
                                <br />
                                <small>Review</small>
                            </div>
                        </Link>
                    </li>
                </>
            }
        </div >
    );
};

export default Sidebar;