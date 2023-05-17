import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling_sheets/homePage.css';
import {Row } from "antd";
import ScholarshipCard from "../components/HomePage/Card"
import { Select, Space, Input } from 'antd'
import { useState } from "react";

  
const Home = ({scholarships, setScholarships}) => {

  const [displayedScholarships ] = useState(scholarships)

  console.log(displayedScholarships)

  const options = [
    {label: "Due this Week", value: "dueWeek"}, 
    {label: "Due this Month", value: "dueMonth"}, 
    {label: "Due this Year", value: "dueYear"}, 
    {label: "Started Applications", value: "startedApp"}, 
    {label: "Not Started Applications", value: "notStartedApp"}
  ]

  const { Search } = Input;

  const onSearch = (value) => {
    console.log(value)
    //setDisplayedScholarships(displayedScholarships.filter(scholarship => scholarship.Name.search(value) === false))
  }

  const handleMultiSelect = (value) => {
    //filter it
    console.log(value)
    if(value.includes('dueWeek')){
      //find the current date, add 7 to this date
      //filter by this date 
    }

    if(value.includes('dueMonth')){
      //find the current date, find all within the month 
      //filter by this date
    }

    if(value.includes('dueYear')){
      //find current date, all values within the year
      //filter by this date
    }

    if(value.includes('startedApp')){
      //filter by started 
    }

    if(value.includes('notStartedApp')){
      //filter by started
    }
}



  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px 10px 20px'}}>
        <Space direction="vertical">
          <Search allowClear bordered size = "large" placeholder = "Search Scholarships" onSearch = {onSearch} style={{width: 700}} />
        </Space>
        <Space style={{width: '20%'}} direction="vertical">
          <Select bordered size = "large" mode="multiple" allowClear style={{width: '100%'}} placeholder="Filter Scholarships" onChange={handleMultiSelect} options={options}></Select>
      </Space>
      </div>
      <Row gutter = {[20, 20]}>
        {
          displayedScholarships.map((scholarship) => (
            <ScholarshipCard scholarship = {scholarship} scholarships = {scholarships} setScholarships = {setScholarships} />
          ))
        }
      </Row>
    </div>
  );
};

        
export default Home;        
