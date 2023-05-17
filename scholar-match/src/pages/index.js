import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling_sheets/homePage.css';
import {Row, Col } from "antd";
import ScholarshipCard from "../components/HomePage/Card"
import { Select, Space, Input } from 'antd'
import { useState } from "react";


  
const Home = ({scholarships, setScholarships}) => {

  const [displayedScholarships ] = useState(scholarships)
  const { Search } = Input;

  const onSearch = (value) => {
    //setDisplayedScholarships(displayedScholarships.filter(scholarship => scholarship.Name.search(value) === false))
  }

  const handleMultiSelect = (value) => {
    //value: an array of the values selected 
  }



  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px 10px 20px'}}>
        <Space direction="vertical">
          <Search allowClear bordered size = "large" placeholder = "Search Scholarships" onSearch = {onSearch} style={{width: 400}} />
        </Space>
        <Space style={{width: '20%'}} direction="vertical">
          <Select 
          bordered 
          size = "large" 
          mode="multiple" 
          allowClear 
          style={{width: '100%'}} 
          placeholder="Filter Scholarships" 
          onChange={handleMultiSelect} 
          options = {[
            {
              label: 'Due Date',
              options: [
                {label: 'Due Today', value: 'dueToday'},
                {label: 'Due this Week', value: 'dueWeek'},
                {label: 'Due this Month', value: 'dueMonth'},
                {label: 'Due this Year', value: 'dueYear'}
              ]
            },{
              label: 'Demographic',
              options: [
                {label: 'Women', value: 'women'}, 
                {label: 'LGBTQ+', value: 'lgbtq'}, 
                {label: 'First Generation College Student', value: 'firstGen'},
                {label: 'African American', value: 'africanAmerican'},
                {label: 'Hispanic', value: 'hispanic'},
                {label: 'High School Student', value: 'hsStudent'},
                {label: 'College Student', value: 'collegeStudent'}
              ]
            },{
              label: 'Region',
              options: [
                {label: 'Delaware', value: 'de'},
                {label: 'Pennsylvania', value: 'pa'},
                {label: 'Virginia', value: 'va'},
                {label: 'Florida', value: 'fl'},
              ]
            },{
              label: 'Sort',
              options: [
                {label: 'Scholarship Name A - Z', value: 'nameAsc'},
                {label: 'Scholarship Name Z - A', value: 'nameDesc'},
                {label: 'Due Date Asc', value: 'dateAsc'},
                {label: 'Due Date Desc', value: 'dateDesc'}
              ]
            }
          ]}
          ></Select>
      </Space>
      </div>
      <div>
          <Row justify = {{center: true}} gutter = {[30, 20]} push = {100}>
            {
                displayedScholarships.map((scholarship) => (
                  <ScholarshipCard scholarship = {scholarship} scholarships = {scholarships} setScholarships = {setScholarships} />
                ))
            }
          </Row> 
      </div>
    </div>
  );
};

        
export default Home;        
