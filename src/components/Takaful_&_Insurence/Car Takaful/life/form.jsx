import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, Select,InputNumber, DatePicker, } from 'antd';
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
  const [show, hide] = useState(false);
  return (
    <div style={{ border: '1px solid blue', padding: '1rem 5rem', borderRadius: '10px' }}>
      <div className='car-form'>
        <img src={income} style={{ width: "5rem", height: "5rem" }} />
        <h3 style={{fontSize: '1.4rem'}}>Let's get connected!</h3>
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
        name="Name"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <Input placeholder='Full name' style={{width: '20rem'}}/>
        </Form.Item>
        <Form.Item 
        name="Contact"
        rules={[
          {
            required: true,
            
          },
        ]}
        
        >
          <InputNumber min={1} placeholder='Contact number' style={{width: '20rem'}}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        }}/>
        </Form.Item>
        <Form.Item 
        name="Email address"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <Input placeholder='Email address' style={{width: '20rem'}}/>
        </Form.Item>
        <Form.Item
          name="Income source"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Income source"
            style={{width: '20rem'}}
          >
            <Option value="Salary">Salary</Option>
            <Option value="Business">Business</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="Marital Status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Marital status"
            style={{width: '20rem'}}
            onChange={(e)=>{
                if(e == 'Single'){
                    hide(false)
                }
                else{
                    hide(true)
                }
            }}
          >
            <Option value="Single">Single</Option>
            <Option value="Married">Married</Option>
            <Option value="Divorced">Divorced</Option>
            <Option value="Widow">Widow</Option>
          </Select>
        </Form.Item>
        {
            show? <Form.Item 
        name="Child Age"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <Input placeholder='Age(s) of child' style={{width: '20rem'}}/>
          <p style={{fontSize: '0.6rem', fontWeight: '600', marginTop: '2px'}}>Add multiple ages separated by comma (,).</p>
        </Form.Item> :null} 
        <Form.Item 
        name="DOB"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <DatePicker placeholder='Your date of birth' style={{width: '20rem'}}/>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit"
          style={{padding: '0rem 5rem', margin: '0rem -5.7rem'}}
          className='form-btn'>
            Submit now
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;