import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, Select, InputNumber, DatePicker, } from 'antd';
import myself from '../../../../assets/Takaful/myself.png'
import family from '../../../../assets/Takaful/family.png'
import parents from '../../../../assets/Takaful/parents.png'
import TextField from '@mui/material/TextField';
import ComboBox from '../AutoComp';
import axios from 'axios';

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
    console.log(values)
    axios.post('http://localhost:3000/familyInsurance', {
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
  const [userAge, setUserAge] = useState()
  const [cash, setCash] = useState()
  const [spouseAge, setSpouseAge] = useState()
  const [childAges, setChildAges] = useState()
  let childrens = childAges?.split(",")
  let childrensDetails = {};
  childrens?.map((v,i)=>{
    let childNo = `Child${i+1}`
    childrensDetails[childNo] = v
  })
  let updateValue = {
    fullName,
    email,
    phone,
    userAge,
    spouseAge,
    childrensDetails,
    "insurancePrize": cash
  }
  const fields = function () {
    let len = +(child)
    for (let i = 0; i < len; i++) {
      <Form.Item>
        <TextField
          id="outlined-number"
          label="Select your ${i}"
          type="number"
          style={{ width: '21rem' }}
          InputProps={{ inputProps: { min: 18, max: 75 } }}
          onBlur={(e) => setUserAge(e.target.value)}
          required
        />
      </Form.Item>
    }
  }
  return (
    <div>
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'start', margin: '1rem 0 0 0', letterSpacing: '1px' }}>Family Insurance</h1>
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
            label="Your name"
            type={"text"}
            style={{ width: '21rem' }}
            onChange={(e) => setFullName(e.target.value)}
            required />
        </Form.Item>
        <Form.Item>
          <TextField
            label="Your email"
            type={"email"}
            style={{ width: '21rem' }}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </Form.Item>
        <Form.Item>
          <TextField
            id="outlined-number"
            label="Your phone number"
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
            label="Select your age"
            type="number"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 18, max: 75 } }}
            onBlur={(e) => setUserAge(e.target.value)}
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
            label="Select spouse age (if no spouse leave empty)"
            type="number"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 18, max: 75 } }}
            onBlur={(e) => setSpouseAge(e.target.value)}
          />
        </Form.Item>
        <p style={{fontSize: '0.55rem', marginBottom: '0.5rem'}}>If no child leave empty</p>
        <Form.Item
          rules={[
            {
              required: true,

            },
          ]}
        >
          <TextField
            id="outlined-number"
            label="Ages of Child (5,3,6,7)"
            type="text"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 18, max: 75 } }}
            onBlur={(e) => setChildAges(e.target.value)}
          />
        </Form.Item>
        <p style={{fontSize: '0.55rem', marginTop:'-1.2rem', marginBottom: '1rem'}}>Add multiple ages separated by comma (,)</p>
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
            onClick={() => (fullName && email && phone && userAge && cash) ? onFinish({ ...updateValue }) : alert("Number must have 11 digit")}>
            Get a Plan Now
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
};
export default App;
