import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, Select, InputNumber, DatePicker, } from 'antd';
import myself from '../../../../assets/Takaful/myself.png'
import family from '../../../../assets/Takaful/family.png'
import parents from '../../../../assets/Takaful/parents.png'
import TextField from '@mui/material/TextField';
import axios from 'axios'
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
    console.log("values-->",values);
    axios.post('http://localhost:3000/myselfInsurance', {
      values
    }).then(res=> console.log(res))
    
  };
  const onReset = () => {
    form.resetFields();
  };
  const [value, setValue] = useState(true);
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [age, setAge] = useState()
  const [cash, setCash] = useState()
  let updateValue = {
    fullName,
    email,
    phone,
    age,
    "insurancePrize": cash
  }
  return (
    <div>
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'start', margin: '1rem 0 0 0', letterSpacing: '1px' }}>Asset Insurance</h1>
        <p style={{ fontSize: '1rem', fontWeight: '600', textAlign: 'start', margin: '0.2rem 0 1rem 0', letterSpacing: '0px' }}>Get a plan in just simple steps!</p>
      </div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        style={{
          marginTop: 20,
          marginBottom: 20,
          textAlign: 'start',
          marginRight: 10
        }}
      >
        <Form.Item>
          <TextField
            label="Full name"
            type={"text"}
            style={{ width: '21rem' }}
            onChange={(e) => setFullName(e.target.value)}
            required />
        </Form.Item>
        <Form.Item>
          <TextField
            label="Email"
            type={"email"}
            style={{ width: '21rem' }}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </Form.Item>
        <Form.Item>
          <TextField
            id="outlined-number"
            label="Phone number"
            type="number"
            style={{ width: '21rem' }}
            onChange={(e) => (e.target.value.length == 11) ? setPhone(e.target.value) : null}
            required
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,

            },
          ]}
        >
          <TextField
            id="outlined-number"
            label="Select age"
            type="number"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 18, max: 75 } }}
            onBlur={(e) => setAge(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <TextField
            id="outlined-number"
            label="Select Hospitalization Limit (PKR)"
            type="number"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 60000, max: 1000000 } }}
            onBlur={(e) => setCash(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit"
            style={{ margin: '0rem 0rem' }}
            className='form-btn'
            onClick={()=> (fullName && email && phone && age && cash) ? onFinish({...updateValue}) : alert("Number must have 11 digit")}>
            Get a Plan Now
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
