import React from 'react';
import { Button, Form, Input, Select,InputNumber } from 'antd';
import income from '../../../../assets/About/income.png'
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div style={{ border: '1px solid blue', padding: '2rem 2rem', borderRadius: '10px' }}>
      <div className='car-form'>
        <img src={income} style={{ width: "5rem", height: "5rem" }} />
        <h3>Let's get connected!</h3>
      </div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          marginTop: 20,
          marginBottom: 20,
          textAlign: 'start',
          marginRight: 10
        }}
      >
        <Form.Item
          name="manufacturer"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select manufacturer"
            style={{width: '20rem'}}
          >
            <Option value="Suzuki">Suzuki</Option>
            <Option value="Unique">Unique</Option>
            <Option value="Honda">Honda</Option>
            <Option value="Super Power">Super Power</Option>
            <Option value="Super Star">Super Star</Option>
            <Option value="United">United</Option>
            <Option value="Yamaha">Yamaha</Option>
            <Option value="Habib">Habib</Option>
            <Option value="Express">Express</Option>
            <Option value="Crown">Crown</Option>
            <Option value="Road Prince">Road Prince</Option>
            <Option value="Racer Bike">Racer Bike</Option>
            <Option value="Hi Speed">Hi Speed</Option>
            <Option value="Metro">Metro</Option>
            <Option value="Union Star">Union Star</Option>
            <Option value="Benelle">Benelle</Option>
            <Option value="Cougar">Cougar</Option>
            <Option value="Eagle Fire Bolt">Eagle Fire Bolt</Option>
            <Option value="Star">Star</Option>
            <Option value="Galaxy">Galaxy</Option>
            <Option value="Super Burraq">Super Burraq</Option>
            <Option value="Hondyas">Hondyas</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="engine"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select engine"
            style={{width: '20rem'}}
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="manufacturing year"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select manufacturing year"
            style={{width: '20rem'}}
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item 
        name="value of bike"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <InputNumber min={1} placeholder='Value of Motor Bike (PKR)' style={{width: '20rem'}}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        }}/>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit"
          style={{padding: '0rem 5rem', margin: '0rem -3.7rem'}}
          className='form-btn'>
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;