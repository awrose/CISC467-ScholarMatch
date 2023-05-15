import { Card, Col } from 'antd'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import scholarshipLogo from '../../images/gradcap.png'
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

//const { Meta } = Card;

const GridCard = ({scholarship}) => {

    //const [showModal, setShowModal] = useState(false);

    //let navigate = useNavigate();
    const saveScholarship = () =>{
        scholarship.Saved = true;
        console.log("scholarship saved!")
        console.log(scholarship.Saved)
    }

    const handleCardClick = () =>{
        //do something
        //setShowModal(showModal => !showModal);
    }

    return (
        <div onClick={handleCardClick} class="mt-2">
            <Col>
                <Card hoverable style={{ width: 330 }} cover={<img src={scholarshipLogo} alt="pic of grad cap"></img>}>
                    <h3>{scholarship.Name}</h3>
                    <h5 >${scholarship.Amount}</h5>
                    <h6 ><b>Deadline: </b>{scholarship.Deadline}</h6>
                    <p>{scholarship.Description}</p>
                    <a class = "btn btn-primary mt-2" href={scholarship.URL} role="button">Apply</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                    <Button color = "primary" onClick={saveScholarship}>Save</Button>
                </Card>
            </Col>
        </div>
    );
};

export default GridCard;