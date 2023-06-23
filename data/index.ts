// * interfaces
import { BrandCategories, Brands } from "~/interfaces/brands.interface";
import { Models } from "~/interfaces/models.interface";
import { Trims } from "~/interfaces/trims.interface";
import { Years } from "~/interfaces/years.interface";

export const totalDealsCount: number = 875054;

export const brandCategories: BrandCategories[] = [
    {
        id: 1,
        title: "الف",
    },
    {
        id: 2,
        title: "ب",
    },
    {
        id: 3,
        title: "پ",
    },
    {
        id: 4,
        title: "ت",
    },
    {
        id: 5,
        title: "ث",
    },
    {
        id: 6,
        title: "ج",
    },
];

export const brands: Brands[] = [
    {
        id: 1,
        name: "الفا رمئو",
        en_name: "Alfa Romeo",
        category_id: 1,
    },
    {
        id: 2,
        name: "بی ام و",
        en_name: "BMW",
        category_id: 2,
    },
    {
        id: 3,
        name: "برلیانس",
        en_name: "Brilliance",
        category_id: 2,
    },
    {
        id: 4,
        name: "پراید",
        en_name: "Pride",
        category_id: 3,
    },
    {
        id: 5,
        name: "پژو",
        en_name: "Peugeot",
        category_id: 3,
    },
    {
        id: 6,
        name: "تویوتا",
        en_name: "Toyota",
        category_id: 4,
    },
    {
        id: 7,
        name: "تیبا",
        en_name: "Tiba",
        category_id: 4,
    },
    {
        id: 8,
        name: "جک",
        en_name: "Jac",
        category_id: 6,
    },
];

export const models: Models[] = [
    {
        id: 1,
        name: "میتو",
        brand_id: 1,
        en_name: "Mito",
    },
    {
        id: 2,
        name: "ژولیتا",
        brand_id: 1,
        en_name: "GiuliettaJ",
    },
    {
        id: 3,
        name: "X3",
        brand_id: 2,
        en_name: "X3",
    },
    {
        id: 4,
        name: "i8",
        brand_id: 2,
        en_name: "i8",
    },
];

export const trims : Trims[] = [
    {
        id: 1,
        name: 'R21',
        model_id: 1,
    },
    {
        id: 2,
        name: '28',
        model_id: 3,
    },
]

export const years : Years[] = [
    {
        id: 1,
        year: '2018',
        trim_id: 1,
    },
    {
        id: 2,
        year: '2020',
        trim_id: 1,
    },
    {
        id: 3,
        year: '2018',
        trim_id: 2,
    },
    {
        id: 4,
        year: '2018',
        model_id: 4,
    },
    {
        id: 5,
        year: '2022',
        model_id: 4,
    },
]