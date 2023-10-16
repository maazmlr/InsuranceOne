import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select,InputNumber, Steps } from 'antd';
import { LoginOutlined } from '@mui/icons-material';
import income from '../../../assets/About/income.png'
import ComboBox from './AutoComp';
import TextField from '@mui/material/TextField';
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
  const [curr, setCurr] = useState(0);
  const [details, setDetails] = useState(null);
  const [Profile, setProfile] = useState(null)
  const onGenderChange = (value) => {
  };
  const onFinishLoginForm = (values) => {
    setDetails(values);
    setCurr(1);
  };
  const onFinishProfileForm = (values) => {
    setDetails(values);
    setCurr(2);
  };
  const forms = [
    <LoginForm onFinish={onFinishLoginForm} initialValues={details}/>,
    <ProfileForm onFinish={onFinishProfileForm} initialValues={Profile} />,
    <Finish/>
]
  const onReset = () => {
    form.resetFields();
  };
  const isStepDisabled=(stepNumber)=>{
    if(stepNumber === 0){
      return false;
    }
    if(stepNumber === 1){
      return details === null
    }
    if(stepNumber === 2){
      return details === null || Profile === null
    }
  }
  return (
    <div style={{ border: '1px solid #00bcf9', padding: '1rem 5rem', borderRadius: '10px' }}>
      <div className='car-form'>
        <img src={income} style={{ width: "5rem", height: "5rem" }} />
        <h3>Let's get connected</h3>
      </div>
      <div className='App'>
        <Steps style={{padding: '32px 16px'}}
        onChange= {setCurr}
        current={curr}>
          <Steps.Step title="login" disabled={isStepDisabled(0)} icon={<LoginOutlined/>}/>
          <Steps.Step title="Profile" disabled={isStepDisabled(1)} icon={<LoginOutlined/>}/>
          <Steps.Step title="Finsih" disabled={isStepDisabled(2)} icon={<LoginOutlined/>}/>
        </Steps>
        {forms[curr]}
      </div>
  </div>
  )
};
function LoginForm({onFinish, initialValues}){
  const [carData,setCarData]=useState([])

  useEffect(()=>{
    const val = axios.get("http://localhost:3000/car")
    val.then(res=>setCarData(res.data.message[0].carData))
  },[])



  const nameCar=carData.map((v,i)=>(v.carName))
    
  const [carMan,setCarMan]=useState("")


  function handleChange(e){
    setCarMan(e)
    console.log("car-->",carMan)
  }
  
  return(


    <Form
        {...layout}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={initialValues}
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
              required: false,
            },
          ]}
        >
        
          <ComboBox  label={"select manufacturer"} data={nameCar}  handleChange={handleChange}/>
        </Form.Item>
        <Form.Item
          name="model"
          rules={[
            {
              required: false,
            },
          ]}
        >
           <ComboBox label={'select model'} data={nameCar}/>
        </Form.Item>
        <Form.Item
          name="manufacturing year"
          rules={[
            {
              required: false,
            },
          ]}
        >
             <ComboBox label={'select manufacturing year'} data={nameCar} />
        </Form.Item>
        <Form.Item 
        name="value of car"
        rules={[
          {
            required: false,
            
          },
        ]}
        > <TextField
        id="outlined-number"
        label="Value of car"
        type="number"
        style={{width:'20rem'}}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Form.Item>
        
        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"
          style={{padding: '0rem 2rem'}}
          className='form-btn'>
            Next
          </Button>
        </Form.Item>
      </Form>
  )
}
function ProfileForm({onFinish,  initialValues}){
  return(
    <Form 
    onFinish={onFinish}
    initialValues={initialValues}
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
    name="Phone"
    rules={[
      {
        required: true,
        
      },
    ]}
    >
      <InputNumber placeholder='Phone' style={{width: '20rem', height: '3rem'}}/>
    </Form.Item>
    <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"
          style={{padding: '0rem 2rem'}}
          onClick={()=> setValue(false)}
          className='form-btn'>
            See Plans
          </Button>
        </Form.Item>
    </Form>
  )
}
function Finish(){
  return(
    <Button type="primary" htmlType="submit"
          style={{padding: '0rem 2rem'}}
          onClick={()=> setValue(false)}
          className='form-btn'>
            Finish
          </Button>
  )
}
export default App;