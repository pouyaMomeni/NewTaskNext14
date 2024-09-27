
import React from 'react';
import MyCard from '@/components/card';
import { ProductCard } from '@/types/product';

// Mock data for the story
const productData: ProductCard = {
  id: 1,
  title: 'Sample Product',
  description: 'This is a description of the sample product.',
  price: 19.99,
  rating: {
    rate: 4.5,
    count: 150,
  },
  category: 'Electronics',
  image: 'https://via.placeholder.com/150', // Placeholder image URL
  func: (id: number) => alert(`Purchased product with id: ${id}`), // Mock function
};

export default {
  title: 'Components/MyCard',
  component: MyCard,
};

// Default story

export const Default = () => <MyCard {...productData} />;
