'use client';
import { getProductApi } from '@/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Spin } from 'antd';
import Footer from '@/components/footer';

const Product: React.FC = () => {
  const params = useParams(); // This replaces useRouter().query
  const { id } = params; // Get the id from the URL
  // React-Query
  const { data, isLoading, isError } = useQuery({
    //@ts-ignore
    queryFn: async () => await getProductApi(id),
    queryKey: ['product'],
  });
  const fallbackImage = '/path/to/placeholder-image.png';

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center p-10">
          <Spin size="large" />
        </div>
      ) : (
        <section className="py-8 bg-white md:py-16 antialiased ">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <Image
                  alt="Product Image"
                  src={data?.image || fallbackImage}
                  width={400}
                  height={400}
                />
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-xl font-semibold sm:text-2xl text-darkest">
                  {data?.title}
                </h1>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p className="text-2xl font-extrabold text-dark sm:text-3xl ">
                    ${data?.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1">
                      {Array.from(
                        { length: Math.ceil(data?.rating.rate as number) },
                        (_, index) => (
                          <FaStar className="text-yellow-500" />
                        ),
                      )}
                    </div>
                    <p className="text-sm font-medium leading-none text-dark ">
                      ({data?.rating.rate})
                    </p>
                    <p className="text-sm font-medium leading-none text-dark underline hover:no-underline ">
                      311 Reviews
                    </p>
                  </div>
                </div>

                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <p
                    title=""
                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to favorites
                  </p>

                  <p
                    title=""
                    className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                      />
                    </svg>
                    Add to cart
                  </p>
                </div>

                <hr className="my-6 md:my-8 border-mid" />

                <p className="mb-6 text-mid">{data?.description}</p>
              </div>
            </div>
          </div>
          <div className="p-3 mt-20">
            <Footer />
          </div>
        </section>
      )}
    </div>
  );
};

export default Product;
