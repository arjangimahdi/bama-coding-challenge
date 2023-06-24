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
        name: "جک",
        en_name: "JAC",
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
        en_name: "Giulietta",
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
    {
        id: 5,
        name: "H320",
        brand_id: 3,
    },
    {
        id: 6,
        name: "H330",
        brand_id: 3,
    },
    {
        id: 7,
        name: "111",
        brand_id: 4,
    },
    {
        id: 8,
        name: "132",
        brand_id: 4,
    },
    {
        id: 9,
        name: "131",
        brand_id: 4,
    },
    {
        id: 10,
        name: "206",
        brand_id: 5,
    },
    {
        id: 11,
        name: "Prius",
        brand_id: 6,
    },
    {
        id: 12,
        name: "Camry",
        brand_id: 6,
    },
    {
        id: 13,
        name: "J5",
        brand_id: 7,
    },
    {
        id: 14,
        name: "S5",
        brand_id: 7,
    },
];

export const trims: Trims[] = [
    {
        id: 1,
        name: "B01",
        model_id: 3,
    },
    {
        id: 2,
        name: "B02",
        model_id: 4,
    },
    {
        id: 3,
        name: "Cross",
        model_id: 5,
    },
    {
        id: 4,
        name: "SX",
        model_id: 8,
    },
    {
        id: 5,
        name: "EX",
        model_id: 9,
    },
    {
        id: 6,
        name: "تیپ ۲",
        model_id: 10,
    },
    {
        id: 7,
        name: "تیپ ۳ (پاناروما)",
        model_id: 10,
    },
];

export const years: Years[] = [
    {
        id: 1,
        year: "2018",
        trim_id: 1,
    },
    {
        id: 2,
        year: "2020",
        trim_id: 1,
    },
    {
        id: 3,
        year: "2018",
        trim_id: 2,
    },
    {
        id: 4,
        year: "2022",
        trim_id: 2,
    },
    {
        id: 5,
        year: "1399",
        trim_id: 3,
    },
    {
        id: 6,
        year: "1400",
        trim_id: 3,
    },
    {
        id: 7,
        year: "1390",
        trim_id: 4,
    },
    {
        id: 8,
        year: "1397",
        trim_id: 4,
    },
    {
        id: 9,
        year: "1392",
        trim_id: 5,
    },
    {
        id: 10,
        year: "1399",
        trim_id: 5,
    },
    {
        id: 11,
        year: "1397",
        trim_id: 6,
    },
    {
        id: 12,
        year: "1398",
        trim_id: 6,
    },
    {
        id: 13,
        year: "1399",
        trim_id: 6,
    },
    {
        id: 14,
        year: "1400",
        trim_id: 6,
    },
    {
        id: 15,
        year: "1401",
        trim_id: 7,
    },
    {
        id: 16,
        year: "1402",
        trim_id: 7,
    },
    {
        id: 17,
        year: "2012",
        model_id: 1,
    },
    {
        id: 18,
        year: "2014",
        model_id: 1,
    },
    {
        id: 19,
        year: "2016",
        model_id: 2,
    },
    {
        id: 20,
        year: "1398",
        model_id: 6,
    },
    {
        id: 21,
        year: "1399",
        model_id: 6,
    },
    {
        id: 22,
        year: "1395",
        model_id: 7,
    },
    {
        id: 23,
        year: "1396",
        model_id: 7,
    },
    {
        id: 24,
        year: "1397",
        model_id: 7,
    },
    {
        id: 25,
        year: "1398",
        model_id: 7,
    },
    {
        id: 26,
        year: "2012",
        model_id: 11,
    },
    {
        id: 27,
        year: "2014",
        model_id: 11,
    },
    {
        id: 28,
        year: "2016",
        model_id: 11,
    },
    {
        id: 29,
        year: "2008",
        model_id: 12,
    },
    {
        id: 30,
        year: "2010",
        model_id: 12,
    },
    {
        id: 31,
        year: "1397",
        model_id: 13,
    },
    {
        id: 32,
        year: "1398",
        model_id: 13,
    },
    {
        id: 33,
        year: "1397",
        model_id: 14,
    },
    {
        id: 34,
        year: "1397",
        model_id: 14,
    },
];
