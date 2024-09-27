import React from 'react';
import { Flex, Radio } from 'antd';
import { sort } from '@/atom/atom';
import { useAtom } from 'jotai';

const options = [
  { label: 'desc', value: 'desc' },
  { label: 'asc', value: 'asc' },
];

const CustomRadio: React.FC = () => {
  const [sortWay, setSortWay] = useAtom(sort);
  const onChange = (e: any) => {
    setSortWay(e.target.value);
  };
  return (
    <Flex vertical gap="middle">
      <Radio.Group
        block
        options={options}
        defaultValue={setSortWay}
        optionType="button"
        buttonStyle="solid"
        value={sortWay}
        onChange={onChange}
      />
    </Flex>
  );
};

export default CustomRadio;
