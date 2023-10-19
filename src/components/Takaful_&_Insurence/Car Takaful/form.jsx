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
  const [details, setdetails] = useState();
  const [loginDetails, setLoginDetails] = useState();
  const [profileDetails, setProfileDetails] = useState();
  const [Profile, setProfile] = useState(null)
  console.log("LoginDetails",loginDetails)
  console.log("profileDetails",profileDetails)
  const onFinishLoginForm = (values) => {
    setCurr(1);
  };
  const onFinishProfileForm = (values) => {
    setCurr(2);
  };
  const updateValueLogin=(values)=>{
    setLoginDetails(values)
  }
  const updateValueProfile=(values)=>{
    setProfileDetails(values)
  }
  const finishBtn=()=>{
   const data = {...loginDetails,...profileDetails}
   console.log(data)
  }
  const forms = [
    <LoginForm onFinish={onFinishLoginForm} initialValues={updateValueLogin}/>,
    <ProfileForm onFinish={onFinishProfileForm} initialValues={updateValueProfile}/>,
    <Finish onFinish={finishBtn}/>
]
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
          <Steps.Step title="Login" disabled={isStepDisabled(0)} icon={<LoginOutlined/>}/>
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
  const [carName, setCarName] = useState()
  const [carYear, setCarYear]= useState()
  const [carModel, setCarModel]= useState()
  const [carPrize, setCarPrize] = useState()
  const [carType, setCarType]= useState([])
  useEffect(()=>{
    const val = axios.get("http://localhost:3000/car")
    val.then(res=>setCarData(res.data.message[0].carData))
  },[])
  let updateValue = {
    carModel,
    carName,
    carYear,
    carPrize
  }

  console.log(carPrize)

  const nameCar=carData.map((v,i)=>(v.carName))

  function handleChangeCarName(e){
    setCarName(e)
  }
  function handleChangeYear(e){
    setCarYear(e)
  } 
  function handleChangeModel(e){
    setCarModel(e)
  }
  let carTypeI=-1
  if(carName){
    carTypeI=carData.findIndex(v=>carName == v.carName)
  }

  useEffect(()=>{
      setCarType(carData[carTypeI]?.details.map(v=>((v.modelName))))
      console.log('basit')
  },[carName])
  const year =(carData[carTypeI]?.details[0].years)

  
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
        <Form.Item>
          <ComboBox  label={"select manufacturer"} data={nameCar}  handleChange={handleChangeCarName}/>
        </Form.Item>
        <Form.Item>
           <ComboBox label={'select model'} data={carType ? carType : []} handleChange={handleChangeModel}/>
        </Form.Item>
        <Form.Item>
             <ComboBox label={'select manufacturing year'} data={year ? year : []} handleChange={handleChangeYear}/>
        </Form.Item>
        <Form.Item> 
        <TextField
        id="outlined-number"
        label="Value of car"
        type="number"
        style={{width:'20rem'}}
        InputProps={{ inputProps: { min: 400000, max: 40000000 } }}
        onBlur={(e)=> setCarPrize(e.target.value)}
        required
      />
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType='submit'
          style={{padding: '0rem 2rem'}}
          className='form-btn'
          onClick={()=> initialValues({...updateValue})}>
            Continue
          </Button>
        </Form.Item>
      </Form>
  )
}
function ProfileForm({onFinish,  initialValues}){
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const updateValue = {
    fullName,
    email,
    phone
  }
  return(
    <Form 
    onFinish={onFinish}
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
        style={{width: '20rem'}}
        onChange={(e)=>setFullName(e.target.value)}
      required/>
    </Form.Item>
    <Form.Item>
      <TextField
        label="Email"
        type={"email"}
        style={{width: '20rem'}}
        onChange={(e)=>setEmail(e.target.value)}
      required/>
    </Form.Item>
    <Form.Item>
      <TextField
        id="outlined-number"
        label="Value of car"
        type="number"
        style={{width:'20rem'}}
        onChange={(e)=>setPhone(e.target.value)}
        required
      />
    </Form.Item>
    <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"
          style={{padding: '0rem 2rem'}}
          className='form-btn'
          onClick={()=>initialValues({...updateValue})}>
            See Plans
          </Button>
        </Form.Item>
    </Form>
  )
}
function Finish({onFinish}){
  return(
    <Button type="primary" htmlType="submit"
          style={{padding: '0rem 2rem'}}
          className='form-btn'
          onClick={()=>onFinish()}>
            See Plan
          </Button>
  )
}
export default App;