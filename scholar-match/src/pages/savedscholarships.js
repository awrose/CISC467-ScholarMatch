import React from 'react';
import { useState, useEffect } from "react";
import { Row } from "antd";
import GridCard from "../components/GridCard"
import db from '../firebase.config'

const SavedScholarships = () => {

  const [savedScholarships, setSavedScholarships] = useState([]);

  useEffect(() => {
    Fetchdata();
  }, [])

  const Fetchdata = async () => {
    db.collection("SavedScholarships").get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
        var data = element.data();
        setSavedScholarships(arr => [...arr, data])
      })
    })
  }

  return (
    <div>
      <Row gutter={[20, 20]}>
        {
          savedScholarships.map((savedScholarship) => (
            <GridCard scholarshipName={savedScholarship.Name} scholarshipDescription={savedScholarship.Description} scholarshipAmount={savedScholarship.Amount} scholarshipDeadline={savedScholarship.Deadline.toDate().toDateString()} scholarshipURL={savedScholarship.URL}/>
          ))
        }
      </Row>
    </div>
  );
};

export default SavedScholarships;