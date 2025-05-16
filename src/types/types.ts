export type Route = { name: string; path: string };

export type TitleProps = {
  title: string;
  align?: string;
  font?: string;
};

export interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  price: number;
  id: number;
  category: string;
  rating: number;
}
