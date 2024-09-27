'use client';

import { getAllProductApi } from '@/api';
import MyCard from '@/components/card';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from 'antd';
import { Card } from 'antd';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { ProductList, slider, sort } from '@/atom/atom'; 
import { useEffect } from 'react';
import Filter from '@/components/filter';
import dynamic from 'next/dynamic';
const { Meta } = Card;

export default function Home() {
  // atom
  const [list, setList] = useAtom(ProductList);
  const [amount, setAmount] = useAtom(slider);
  const [sortWay, setSortway] = useAtom(sort);
  
  // React-Query
  const { data, isLoading, isError,refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => await getAllProductApi(amount,sortWay),
  });

  // save data in atom
  useEffect(() => {
    if (data) {
      setList(data); // Update the atom with the fetched data
    }
  }, [data, setList,amount,sortWay]);

  const router = useRouter();
  // func for navigation
  const handleNavigation = (id: number) => {
    router.push(`/product/${id}`);
  };

  // for refeching 
  const refechFunc = () => {
    refetch()
  }

  //lazy loading
  const LazyFooter = dynamic(() => import('@/components/footer'), {
    loading: () => <p>Loading...</p>,  // Fallback while loading
  });

  return (
    <div className="font-[family-name:var(--font-geist-mono)] bg-custom-gradient ">
      <div className='p-5'>
        <Filter onClick={refechFunc}/>
      </div>
      <div className="flex flex-wrap gap-10 p-10 justify-center">
        {isLoading
          ? Array.from({ length: 20 }, (_, index) => (
              <Card style={{ width: 300 }}>
                <Skeleton loading={true} active>
                  <Meta
                    title={<Skeleton.Input style={{ width: 100 }} active />}
                    description={<Skeleton paragraph={{ rows: 2 }} active />}
                  />
                </Skeleton>
              </Card>
            ))
          : data?.map((value, key) => {
              return (
                <MyCard
                  category={value.category}
                  description={value.description}
                  id={value.id}
                  image={value.image}
                  price={value.price}
                  rating={value.rating}
                  title={value.title}
                  key={key}
                  func={() => handleNavigation(value.id)}
                />
              );
            })}
      </div>
      <div className="p-3">
        <LazyFooter />
      </div>
    </div>
  );
}
