import React, { useState } from 'react';
import { Button, Form, Input, Select,InputNumber, Steps } from 'antd';
import { LoginOutlined } from '@mui/icons-material';
import income from '../../../assets/About/income.png'
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
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select manufacturer"
            style={{width: '20rem'}}
          >
            <Option value="Suzuki">Suzuki</Option>
            <Option value="Toyota">Toyota</Option>
            <Option value="Honda">Honda</Option>
            <Option value="Daihatsu">Daihatsu</Option>
            <Option value="Nissan">Nissan</Option>
            <Option value="Hyundai">Hyundai</Option>
            <Option value="Cherry">Cherry</Option>
            <Option value="United">United</Option>
            <Option value="Adam">Adam</Option>
            <Option value="Audi">Audi</Option>
            <Option value="BMW">BMW</Option>
            <Option value="Changan">Changan</Option>
            <Option value="FAW">FAW</Option>
            <Option value="Hino">Hino</Option>
            <Option value="Jac">Jac</Option>
            <Option value="Jaguar">Jaguar</Option>
            <Option value="Jeep">Jeep</Option>
            <Option value="JMC">JMC</Option>
            <Option value="JW Forland">JW Forland</Option>
            <Option value="KIA">KIA</Option>
            <Option value="Land Rover">Land Rover</Option>
            <Option value="Mercedes">Mercedes</Option>
            <Option value="Lexus">Lexus</Option>
            <Option value="Mazda">Mazda</Option>
            <Option value="Mitsubishi">Mitsubishi</Option>
            <Option value="Porsche">Porsche</Option>
            <Option value="Tesla">Tesla</Option>
            <Option value="Rang Rover">Rang Rover</Option>
            <Option value="Prince">Prince</Option>
            <Option value="ISUZU">ISUZU</Option>
            <Option value="MG">MG</Option>
            <Option value="Proton">Proton</Option>
            <Option value="Haval">Haval</Option>
            <Option value="Subaru">Subaru</Option>
            <Option value="Peugeot">Peugeot</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="model"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select model"
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
        name="value of car"
        rules={[
          {
            required: true,
            
          },
        ]}
        >
          <InputNumber min={1} placeholder='Value of Car (PKR)' style={{width: '20rem'}}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        }}/>
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