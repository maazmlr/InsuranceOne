import { useEffect, useState } from 'react'
import Card from '../../../Plans/card'
import Card1 from '../../../Plans/card1'
import Sec1 from '../../../Plans/section1'
import axios from 'axios'


function PlanParents() {
    const [data, setData] = useState({})
    const [data1, setData1] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/parentsInsurance', {

        }).then(res => setData1(res.data.message))
        setData(JSON.parse(localStorage.getItem("myselfParentsFormData")))
    }, [])
    console.log(data1)
   const elements =data1.map((value,i)=>
   <Card1 key={i}
    img={value.entity.img}
   
    heading={value.companyName}
    hospital={value.entity.hospital_limit}
    room_ent={value.entity.room_entitlement}
    pre_post_hosp={value.entity.pre_post_hospitalization_benefits}
    romm_board={value.entity.room_board}
    increase_lim={value.entity.Increase_limit}
    critical_ill={value.entity.Critical_illness_limit}
    rupees={value.ageAmount}
/>)
    return (
        <div>
            <Sec1 />
            <Card name={data.fullName} email={data.email} age={`Parents Age: ${data.parentsAge}`} phone={data.phone} prize={data.insurancePrize} />
            {elements}
        </div>
    )
}

export default PlanParents;
