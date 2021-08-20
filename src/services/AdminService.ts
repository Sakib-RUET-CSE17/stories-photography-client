import requests from 'services/httpService'
import { IBlogData } from 'types';
class OrderService {

    getBlogs(): Promise<IBlogData[]> {
        return requests.get(`/blogs`);
    }

    getBlogByID(id: string): Promise<IBlogData> {
        return requests.get(`/blog/${id}`);
    }

    addBlog(body: IBlogData): Promise<IBlogData> {
        return requests.post(`/addBlog`, body);
    }

    addAdmin(body: { email: string }): Promise<{ email: string }> {
        return requests.post(`/addAdmin`, body);
    }

    // updateOrderStatus(id: string, body: { status: string }): Promise<IBookingData> {
    //     return requests.patch(`/updateOrderStatus/${id}`, body);
    // }

    deleteBlog(id: string): Promise<IBlogData> {
        return requests.delete(`/deleteBlog/${id}`);
    }
}

export default new OrderService()