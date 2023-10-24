import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select,InputNumber, Steps } from 'antd';
import { LoginOutlined } from '@mui/icons-material';
import income from '../../../../assets/About/income.png'
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
    
  };
  const onFinishProfileForm = (values) => {
    
  };
  const updateValueLogin=(values)=>{
    setLoginDetails(values)
    setCurr(1);
  }
  const updateValueProfile=(values)=>{
    setProfileDetails(values)
    setCurr(2);
  }
  const finishBtn=()=>{
   const data = {...loginDetails,...profileDetails}
   axios.post("http://localhost:3000/PostBike", {
    data
  })
  }
  const forms = [
    <LoginForm onFinish={onFinishLoginForm} initialValues={updateValueLogin}/>,
    <ProfileForm onFinish={onFinishProfileForm} initialValues={updateValueProfile}/>,
    <Finish onFinish={finishBtn}/>
]
  const isStepDisabled=(stepNumber)=>{
    if(stepNumber === 0){
      return false || Profile === null
    }
    if(stepNumber === 1){
      return details === null || Profile === null
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
          <Steps.Step title="Bike Info" disabled={isStepDisabled(0)} icon={<LoginOutlined/>}/>
          <Steps.Step title="User Info" disabled={isStepDisabled(1)} icon={<LoginOutlined/>}/>
          <Steps.Step title="Finsih" disabled={isStepDisabled(2)} icon={<LoginOutlined/>}/>
        </Steps>
        {forms[curr]}
      </div>
  </div>
  )
};
function LoginForm({onFinish, initialValues}){
  
  const [bikeData,setBikeData]=useState([])
  const [bikeName, setBikeName] = useState()
  const [bikeYear, setBikeYear]= useState()
  const [bikeEngine, setBikeEngine]= useState()
  const [bikePrize, setBikePrize] = useState()
  const [bikeType, setBikeType]= useState([])
  useEffect(()=>{
    const val = axios.get("http://localhost:3000/bike")
    val.then(res=>setBikeData(res.data.message[0].bikeData))
  },[])
  let updateValue = {
    bikeEngine,
    bikeName,
    bikeYear,
    bikePrize
  }

  const nameBike=bikeData.map((v,i)=>(v.bikeName))

  function handleChangeBikeName(e){
    setBikeName(e)
  }
  function handleChangeYear(e){
    setBikeYear(e)
  } 
  function handleChangeModel(e){
    setBikeEngine(e)
  }
  let bikeTypeI=-1
  if(bikeName){
    bikeTypeI=bikeData.findIndex(v=>bikeName == v.bikeName)
  }

  useEffect(()=>{
      setBikeType(bikeData[bikeTypeI]?.details.map(v=>((v.engine))))
  },[bikeName])
  const year =(bikeData[bikeTypeI]?.details[0].years)

  
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
          <ComboBox  label={"select manufacturer"} data={nameBike}  handleChange={handleChangeBikeName}/>
        </Form.Item>
        <Form.Item>
           <ComboBox label={'select engine'} data={bikeType ? bikeType : []} handleChange={handleChangeModel}/>
        </Form.Item>
        <Form.Item>
             <ComboBox label={'select manufacturing year'} data={year ? year : []} handleChange={handleChangeYear}/>
        </Form.Item>
        <Form.Item> 
        <TextField
        id="outlined-number"
        label="Value of bike"
        type="number"
        style={{width:'21rem'}}
        InputProps={{ inputProps: { min: 40000, max: 1000000 } }}
        onBlur={(e)=> setBikePrize(e.target.value)}
        required
      />
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType='submit'
          style={{padding: '0rem 4rem', fontWeight: '600'}}
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
        style={{width: '21rem'}}
        onChange={(e)=>setFullName(e.target.value)}
      required/>
    </Form.Item>
    <Form.Item>
      <TextField
        label="Email"
        type={"email"}
        style={{width: '21rem'}}
        onChange={(e)=>setEmail(e.target.value)}
      required/>
    </Form.Item>
    <Form.Item>
      <TextField
        id="outlined-number"
        label="Phone number"
        type="number"
        style={{width:'21rem'}}
        onChange={(e)=>(e.target.value.length == 11) ? setPhone(e.target.value) : null}
        required
      />
    </Form.Item>
    <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"
          style={{padding: '0rem 4rem', fontWeight: '600'}}
          className='form-btn'
          onClick={()=>(phone) ? initialValues({...updateValue}) : alert("Number must have 11 digit")}>
            Continue
          </Button>
        </Form.Item>
    </Form>
  )
}
function Finish({onFinish}){
  return(
    <Button type="primary" htmlType="submit"
    style={{padding: '0rem 4rem', fontWeight: '600'}}
          className='form-btn'
          onClick={()=>onFinish()}>
            See Plan
          </Button>
  )
}
export default App;