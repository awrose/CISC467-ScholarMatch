import React from 'react';
import { useState } from 'react';
//import db from '../firebase.config';
//import Searchbar from "../components/searchBar";
import 'bootstrap/dist/css/bootstrap.min.css'
/*import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'*/
import '../styling_sheets/homePage.css';
import {Row } from "antd";
import ScholarshipCard from "../components/HomePage/Card"
import loadedScholarships from "../scholarships.json"

  
const Home = () => {
  const SCHOLARSHIPS = loadedScholarships.map((scholarship) => ({
    ...scholarship
  }));

  const [scholarships] = useState(SCHOLARSHIPS);
  //const [dbscholarships, setdbscholarships] = useState([]);

  scholarships.forEach(scholarship => {
    console.log(scholarship.URL)
  })

  /*useEffect(() => {
    Fetchdata();
  }, [])
 
  const Fetchdata = async() =>{
    db.collection("Scholarships").get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
        var data = element.data();
        setdbscholarships(arr => [...arr, data])
      })
    })
  }*/
  return (
    <div>
      <Row gutter = {[20, 20]}>
        {
          scholarships.map((scholarship) => (
            <ScholarshipCard scholarship = {scholarship}/>
          ))
        }
      </Row>
    </div>
  );
};
        
export default Home;        