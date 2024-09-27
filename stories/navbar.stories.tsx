// @ts-nocheck
import React from 'react';
import NavBar from '@/components/navbar'

export default {
  title: 'Components/NavBar',
  component: NavBar,
  argTypes: {
    json: { control: 'array' },
    jsonLink: { control: 'array' },
  },
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  json: ['Home', 'Products', 'About', 'Contact'],
  jsonLink: ['/home', '/products', '/about', '/contact'],
};

export const WithCustomItems = Template.bind({});
WithCustomItems.args = {
  json: ['Services', 'Portfolio', 'Testimonials', 'Blog'],
  jsonLink: ['/services', '/portfolio', '/testimonials', '/blog'],
};
