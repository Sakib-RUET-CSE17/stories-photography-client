import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const AddProduct = React.lazy(() => import('components/dashboard/admin/AddProduct'));
const DeleteBlog = React.lazy(() => import('components/dashboard/admin/DeleteBlog'));
const MakeAdmin = React.lazy(() => import('components/dashboard/admin/MakeAdmin'));
const ManageOrder = React.lazy(() => import('components/dashboard/admin/ManageOrder'));
const WriteBlog = React.lazy(() => import('components/dashboard/admin/WriteBlog'));
const OrderList = React.lazy(() => import('components/dashboard/OrderList'));
const ReadBlog = React.lazy(() => import('components/home/ReadBlog'));
const Login = React.lazy(() => import('components/login/login/Login'));
const PrivateRoute = React.lazy(() => import('components/login/privateRoute/PrivateRoute'));
const CheckOut = React.lazy(() => import('pages/CheckOut/CheckOut'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const ProductDetails = React.lazy(() => import('components/home/ProductDetails'));

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/help" component={Help} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/blog/:id" component={ReadBlog} />
          <PrivateRoute path="/buy/:id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
            <ManageOrder />
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/writeBlog">
            <WriteBlog />
          </PrivateRoute>
          <PrivateRoute path="/deleteBlog">
            <DeleteBlog />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
