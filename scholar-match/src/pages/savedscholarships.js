import React from 'react';
import { useState, useEffect } from "react";
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
            <GridCard scholarship = {scholarship} scholarships={scholarships} setScholarships={setScholarships} />
          ))
        }
      </Row> 
    </div>
  );
};
   
export default SavedScholarships;





