export class Product {
    brand: string;
    colour: ColourInterface;
    discount: number;
    id:string;
    image: string;
    price: PriceInterface;
    rating: number;
    title: string;
}

export interface ColourInterface {
    color: string;
    title: string;
}
export interface PriceInterface {
    finalPrice: string;
}