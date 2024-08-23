import { Category } from "./category";

export interface Product {
    id: number;
    title: string;
    category_id: number;
    price: number;
    description?: string;
    image: string;
    code: string;
    created_at?: string;
    updated_at?: string;
    category: Category;
}
