'use client';

import React from 'react';
import { Product, ProductCard } from '@/types/product';
import { StarFilled } from '@ant-design/icons';
import { RiCoinFill } from 'react-icons/ri';
import { FaBoxes } from 'react-icons/fa';
import TruncatedText from './truncatedText';
import { FaShoppingBasket } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const MyCard: React.FC<ProductCard> = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
  func,
}) => (
  <div className="w-[25rem] h-[12rem]  bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300 ease-in-out  hover:shadow-2xl">
    <div className="p-5 flex flex-col justify-between h-full ">
      <TruncatedText text={title} maxLength={40} />
      <div className="flex gap-10 justify-between items-center">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-1">
          {price} <RiCoinFill className="text-yellow-400" />
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-1 items-center">
          {rating.rate} <FaStar className="text-yellow-500" />
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">
          {rating.count} <FaBoxes className="text-amber-900" />
        </p>
      </div>
      <button
        onClick={() => func(id)}
        type="button"
        className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        <FaShoppingBasket className="mr-2 text-lg" />{' '}
        {/* Adjust icon size if needed */}
        Purchase
      </button>
    </div>
  </div>
);

export default MyCard;
