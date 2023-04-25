import React from 'react';
import { useState } from "react";
import { Row } from "antd";
import GridCard from "../components/GridCard"
  
const SavedScholarships = () => {
  return (
    <div>
      <Row gutter={[20,20]}>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
      </Row> 
    </div>
  );
};
   
export default SavedScholarships;