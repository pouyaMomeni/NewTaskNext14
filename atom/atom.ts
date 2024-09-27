import { Product } from '@/types/product';
import { atom } from 'jotai';

export const ProductList = atom<Product[]>();

export const slider = atom<number>(20);

export const sort = atom<string>('asc');
