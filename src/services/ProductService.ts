import requests from 'services/httpService'
import { IProduct } from 'types'
class ProductService {

    getProducts(): Promise<IProduct[]> {
        return requests.get('/products');
    }

    getProductByID(id: string): Promise<IProduct> {
        return requests.get(`/product/${id}`);
    }

    addProduct(body: IProduct): Promise<IProduct> {
        return requests.post(`/addProduct`, body);
    }

    updateProduct(id: string, body: IProduct): Promise<IProduct> {
        return requests.patch(`/updateProduct/${id}`, body);
    }

    deleteProduct(id: string): Promise<IProduct> {
        return requests.delete(`/deleteProduct/${id}`);
    }
}

export default new ProductService()