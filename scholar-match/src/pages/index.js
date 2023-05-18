import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling_sheets/homePage.css';
import {Row, Col } from "antd";
import ScholarshipCard from "../components/HomePage/Card"
import { Select, Space, Input } from 'antd'
import { useState } from "react";


  
const Home = ({scholarships, setScholarships}) => {

  const [displayedScholarships, setDisplayedScholarships ] = useState(scholarships)
  const { Search } = Input;

  console.log(displayedScholarships);

  const onSearch = (value) => {
    console.log(value);

    if(value !== ''){
      setDisplayedScholarships(displayedScholarships.filter(scholarship => scholarship.Name.toLowerCase().search(value.toLowerCase()) !== -1))
    }else{
      setDisplayedScholarships(scholarships);
    }
  }

  const handleSort = (value) => {
    //alphabetic
    if(value.includes('nameAsc')){
      setDisplayedScholarships([...displayedScholarships].sort(function(a, b){
        var nameA = a.Name.toLowerCase();
        var nameB = b.Name.toLowerCase();

        if(nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        return 0;
      }));

      console.log(displayedScholarships)
    }

    if(value.includes('nameDesc')){
      setDisplayedScholarships([...displayedScholarships].sort(function(a, b){
        var nameA = a.Name.toLowerCase();
        var nameB = b.Name.toLowerCase();

        if(nameA < nameB) return 1;
        else if (nameA > nameB) return -1;
        return 0;
      }));
    }

    //dates
    if(value.includes('dateDesc')){
      //sort the array by dates
      setDisplayedScholarships([...displayedScholarships].sort(function(a, b){
        return (a.Deadline < b.Deadline)  ? 1 : ((a.Deadline > b.Deadline) ? -1: 0);
      }))
    }

    if(value.includes('dateAsc')){
      setDisplayedScholarships([...displayedScholarships].sort(function(a, b){
        return (a.Deadline < b.Deadline)  ? -1 : ((a.Deadline > b.Deadline) ? 1: 0);
      }))
    }

    if(value.includes('amtAsc')){
      setDisplayedScholarships([...displayedScholarships].sort(function(a, b){
        a = parseInt(a.Amount)
        b = parseInt(b.Amount)
        return (a < b)  ? -1 : ((a > b) ? 1: 0);
      }))
    }

    if(value.includes('amtDesc')){
      setDisplayedScholarships([...displayedScholarships].sort(function(a, b){
        a = parseInt(a.Amount)
        b = parseInt(b.Amount)
        return (a < b)  ? 1 : ((a > b) ? -1: 0);
      }))
    }

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
          allowClear 
          style={{width: '100%'}} 
          placeholder="Sort Scholarships" 
          onChange={handleSort} 
          options = {[
            {
              label: 'Sort',
              options: [
                {label: 'Scholarship Name A - Z', value: 'nameAsc'},
                {label: 'Scholarship Name Z - A', value: 'nameDesc'},
                {label: 'Due Date Asc', value: 'dateAsc'},
                {label: 'Due Date Desc', value: 'dateDesc'},
                {label: 'Amount Asc', value: 'amtAsc'},
                {label: 'Amount Desc', value: 'amtDesc'}
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
