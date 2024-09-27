import Client from './client';
import { Product } from '@/types/product';

export const getAllProductApi = async (
  amount: number,
  sort: string,
): Promise<Product[]> => {
  const res = await Client.get<Product[]>(
    `products?sort=${sort}&limit=${amount}`,
  );
  return res.data;
};

export const getProductApi = async (id: string): Promise<Product> => {
  const res = await Client.get<Product>(`products/${id}`);
  return res.data;
};
