export interface IProduct {
    _id?: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface ILoggedInUser {
    name?: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
}

export interface IBookingData {
    _id?: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    orderTime: Date;
    product: IProduct;
    paymentId?: string;
    status: string;
}

export interface IBlogData {
    _id?: string;
    title: string;
    blog: string;
    author: string;
    date: Date;
}