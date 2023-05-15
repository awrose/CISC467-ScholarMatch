import React from 'react';
import { useState } from "react";
import { Row } from "antd";
import GridCard from "../components/GridCard"
  
const SavedScholarships = ({scholarships, setScholarships}) => {
  //filter out the saved scholarships 
  const savedScholarships = scholarships.filter(scholarship => scholarship.Saved === true);

  return (
    <div>
      <Row gutter={[20,20]}> 
        {
          savedScholarships.map((scholarship) => (
            <GridCard scholarship = {scholarship} />
          ))
        }
      </Row> 
    </div>
  );
};
   
export default SavedScholarships;

/*  return (
  <div>
  <Row gutter={[20,20]}>
    <GridCard/>
    <GridCard/>
    <GridCard/>
    <GridCard/>
    <GridCard/>
  </Row> 
</div>
);*/