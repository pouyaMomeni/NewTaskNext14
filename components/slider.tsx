'use client';

import React, { useState } from 'react';
import type { InputNumberProps } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { useAtom } from 'jotai';
import { slider } from '@/atom/atom';

const IntegerStep: React.FC = () => {
  const [amount, setAmount] = useAtom(slider);
  const [inputValue, setInputValue] = useState(amount);

  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
    setAmount(inputValue);
  };

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
          value={amount}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default IntegerStep;
