import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, Select,InputNumber, DatePicker, } from 'antd';
import myself from '../../../../assets/Takaful/myself.png'
import family from '../../../../assets/Takaful/family.png'
import parents from '../../../../assets/Takaful/parents.png'
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
  const [value, setValue] = useState(true);
  return (
    <div style={{ border: '1px solid blue', padding: '2rem 3rem', borderRadius: '10px' }}>
      <div className='health-header'>
        <a key="myself" onClick={(e)=> setValue(true)}>
            <img src={myself} alt="" />
            <p>Myself</p>
        </a>
        <a key="family" style={{margin: '0 0.7rem'}} onClick={(e)=>setValue(false)}>
            <img src={family} alt="" />
            <p>Family</p>
        </a>
        <a key="parents" onClick={(e)=> setValue(false)}>
            <img src={parents} alt="" />
            <p>Parents</p>
        </a>
      </div>
      {value? <div>
        <h1 style={{fontSize: '1.8rem', fontWeight: '600', textAlign: 'start', margin: '1rem 0 0 0', letterSpacing: '1px'}}>Asset Insurance</h1>
        <p style={{fontSize: '1rem', fontWeight: '600', textAlign: 'start', margin: '0.2rem 0 1rem 0', letterSpacing: '0px'}}>Get a quote in just simple steps!</p>
      </div> : <div>
        <h1 style={{fontSize: '1.8rem', fontWeight: '600', textAlign: 'start', margin: '1rem 0 0 0', letterSpacing: '1px'}}>Personal Insurance</h1>
        <p style={{fontSize: '1rem', fontWeight: '600', textAlign: 'start', margin: '0.2rem 0 1rem 0', letterSpacing: '0px'}}>Get a quote in just simple steps!</p>
      </div> }
      {value? <Form
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
        name="Name"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <Input placeholder='Full name' style={{width: '20rem', height: '3rem'}}/>
        </Form.Item>
        <Form.Item 
        name="Email address"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <Input placeholder='Email address' style={{width: '20rem', height: '3rem'}}/>
        </Form.Item>
        <Form.Item
          name="Insurance type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Insurance type"
            style={{width: '20rem', height: '3rem'}}
          >
            <Option value="Car insurance">Car insurance</Option>
            <Option value="Bike insurance">Bike insurance</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit"
                    style={{padding: '0.3rem 6rem', margin: '0rem -8rem'}}
          className='form-btn'>
            Get a Quote Now
          </Button>
        </Form.Item>
      </Form> : <Form
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
        name="Name"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <Input placeholder='Full name' style={{width: '20rem', height: '3rem'}}/>
        </Form.Item>
        <Form.Item 
        name="Email address"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <Input placeholder='Email address' style={{width: '20rem', height: '3rem'}}/>
        </Form.Item>
        <Form.Item
          name="Insurance type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Insurance type"
            style={{width: '20rem', height: '3rem'}}
          >
            <Option value="Family insurance">Family insurance</Option>
            <Option value="Life insurance">Life insurance</Option>
            <Option value="Travel insurance">Travel insurance</Option>
            <Option value="Health insurance">Health insurance</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit"
          style={{padding: '0rem 6rem', margin: '0rem -8rem'}}
          className='form-btn'>
            Get a Quote Now
          </Button>
        </Form.Item>
      </Form>}
    </div>
  );
};
export default App;