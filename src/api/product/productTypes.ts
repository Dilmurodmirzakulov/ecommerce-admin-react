export interface SliderData {
    name: string;
    name_ru: string;
    name_eng: string;
    description: string;
    description_ru: string;
    description_eng: string;
    images: string;
    price: number;
    discount: number;
    count: number;
}

export interface ErrorResponse {
    message: string;
}