export interface BrandCategories {
    readonly id: number;
    title: string;
    brands?: Brands[]
}

export interface Brands {
    readonly id: number;
    name: string;
    en_name?: string;
    category_id: number;
}
