export class ProductModel {
  image: string;
  title: string;
  price: number;
  previousPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disadvantages: string;
  categories: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  }
}
