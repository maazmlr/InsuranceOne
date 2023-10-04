import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import income from '../../assets/About/income.png'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const App = () => (
    <div>
    <div className='about-form'>
        <img src={income} style={{width:"5rem",height:"5rem"}}/>
        <h3>Let's get connected</h3>
        <p>Just fill out this form and we will be with you!</p>
    </div>
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Full name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input placeholder="full name"/>
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
          required: true,
        },
      ]}
    >
      <Input placeholder="Email address"/>
    </Form.Item>
    <Form.Item
      name={['user', 'contact']}
      label="Contact"
      rules={[
        {
          type: 'number',
          required: true,
        },
      ]}
    >
      <Input placeholder="Contact number"/>
    </Form.Item>
    <Form.Item name={['user', 'message']} label="Message">
      <Input.TextArea placeholder="Message"/>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button className='form-btn' type="primary" htmlType="submit">
        Submit Now
      </Button>
    </Form.Item>
  </Form>
  </div>
);
export default App;