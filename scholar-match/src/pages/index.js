import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling_sheets/homePage.css';
import {Row } from "antd";
import ScholarshipCard from "../components/HomePage/Card"
import { Select, Space } from 'antd'

  
const Home = ({scholarships, setScholarships}) => {
  const options = [
    {label: "Due this Week", value: "dueWeek"}, 
    {label: "Due this Month", value: "dueMonth"}, 
    {label: "Due this Year", value: "dueYear"}, 
    {label: "Started Applications", value: "startedApp"}, 
    {label: "Not Started Applications", value: "notStartedApp"}
  ]

  const handleMultiSelect = (value) => {
    //filter it
    console.log(value)
    if(value.includes('dueWeek')){
      console.log('YAY')
    }
}



  return (
    <div>
      <Space style={{width: '100%'}} direction="vertical">
          <Select mode="multiple" allowClear style={{width: '100%'}} placeholder="Please Select" onChange={handleMultiSelect} options={options}></Select>
      </Space>
      <Row gutter = {[20, 20]}>
        {
          scholarships.map((scholarship) => (
            <ScholarshipCard scholarship = {scholarship} scholarships = {scholarships} setScholarships = {setScholarships} />
          ))
        }
      </Row>
    </div>
  );
};

        
export default Home;        
