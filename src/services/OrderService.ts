import requests from 'services/httpService'
import { IBookingData } from 'types';
class OrderService {

    getOrders(email: string): Promise<IBookingData[]> {
        return requests.get(`/orders?email=${email}`);
    }

    getOrderByID(id: string): Promise<IBookingData> {
        return requests.get(`/order/${id}`);
    }

    addOrder(body: IBookingData): Promise<IBookingData> {
        return requests.post(`/addOrder`, body);
    }

    updateOrderStatus(id: string, body: { status: string }): Promise<IBookingData> {
        return requests.patch(`/updateOrderStatus/${id}`, body);
    }

    // deleteProduct(id: string): Promise<IProduct> {
    //     return requests.delete(`/deleteProduct/${id}`);
    // }
}

export default new OrderService()