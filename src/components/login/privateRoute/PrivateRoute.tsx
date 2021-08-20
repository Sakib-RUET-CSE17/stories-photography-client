import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { UserContext } from '../../../App';

interface IToken {
    name: string;
    email: string;
    exp: number;
}

const PrivateRoute = ({ children, ...rest }: any) => {
    // console.log('private')
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        // console.log(token, loggedInUser);
        if (!token) {
            return false;
        }
        const decodedToken: IToken = jwt_decode(token);
        setLoggedInUser({ name: decodedToken.name, email: decodedToken.email })
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        return decodedToken.exp > currentTime;
    }
    return (
        <Route
            {...rest}
            component={({ location }: any) =>
                (loggedInUser.email || isLoggedIn()) ? (
                    children
                ) :

                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;