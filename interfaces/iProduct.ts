export interface iApiResponse {
    items: any;
    products: iProduct[];
}

export interface iProduct {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt?: string;
    updatedAt?: string;
}
