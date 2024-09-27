'use client';

import { useState } from 'react';
import { Form, Input } from 'antd';
import { saveAndFetchData } from './actions';
import useCustomNotification from '@/hook/notification';
import { useAtom } from 'jotai';
import { ProductList } from '@/atom/atom';
const { TextArea } = Input;

export interface FormState {
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export default function AddProductForm() {
  const [list, setList] = useAtom(ProductList);
  console.log(list);

  // custom hook for show notofication
  const { openNotification, contextHolder } = useCustomNotification();
  // inpute state
  const [formState, setFormState] = useState<FormState>({
    title: '',
    price: '',
    description: '',
    image: 'https://i.pravatar.cc',
    category: '',
  });

  // getting inpute value
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value, type } = e.target;

    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    // server action
    const result = await saveAndFetchData(formState);
    if (result.success) {
      openNotification('Success', 'New Product Added!', 0);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="w-full flex justify-center py-10 font-[family-name:var(--font-geist-mono)] bg-custom-gradient md:h-screen">
        <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] p-10 rounded-md">
          <h1 className="text-lg font-semibold lg:text-lg xl:text-lg text-darkest mb-6">
            You can add new Product here!
          </h1>
          <Form name="login-form" onFinish={handleSubmit} layout="vertical">
            <div className="flex flex-col md:flex-row justify-between">
              <Form.Item
                label={
                  <span className="font-[family-name:var(--font-geist-mono)]">
                    Title
                  </span>
                }
                name="title"
                rules={[
                  { required: true, message: 'Please input your title!' },
                ]}
                className="w-full md:w-[15rem]"
              >
                <Input
                  id="title"
                  value={formState.title}
                  onChange={handleChange}
                  placeholder="title"
                  autoComplete="off"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="font-[family-name:var(--font-geist-mono)]">
                    Price
                  </span>
                }
                name="price"
                rules={[
                  { required: true, message: 'Please input your price!' },
                ]}
                className="w-full md:w-[15rem]"
              >
                <Input
                  id="price"
                  value={formState.title}
                  onChange={handleChange}
                  placeholder="price"
                  autoComplete="off"
                />
              </Form.Item>
            </div>

            <Form.Item
              label={
                <span className="font-[family-name:var(--font-geist-mono)]">
                  Description
                </span>
              }
              name="description"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <TextArea
                id="description"
                value={formState.title}
                onChange={handleChange}
                placeholder="description"
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-[family-name:var(--font-geist-mono)]">
                  Category
                </span>
              }
              name="category"
              rules={[
                { required: true, message: 'Please input your category!' },
              ]}
            >
              <Input
                id="category"
                value={formState.title}
                onChange={handleChange}
                placeholder="category"
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item>
              <button
                type="button"
                className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
