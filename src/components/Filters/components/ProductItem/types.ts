export interface ProductItemProps {
  id?: number;
  name: string;
  price: number;
  staff_favorite?: boolean;
  imageUrl: string;
  icons: Array<string | boolean>;
}
