import { Card, Col } from 'antd'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import scholarshipLogo from '../../images/gradcap.png'
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

const { Meta } = Card;

const GridCard = ({scholarshipName, scholarshipDescription, scholarshipAmount, scholarshipDeadline, scholarshipURL}) => {

    const [showModal, setShowModal] = useState(false);

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = "google.com";
        navigate(path);
    }

    const handleCardClick = () =>{
        //do something
        setShowModal(showModal => !showModal);
    }

    return (
        <div onClick={handleCardClick} class="mt-2">
            <Col>
                <Card hoverable style={{ width: 330 }} cover={<img src={scholarshipLogo} alt="pic of grad cap"></img>}>
                    <h3>{scholarshipName}</h3>
                    <h5 >${scholarshipAmount}</h5>
                    <h6 ><b>Deadline: </b>{scholarshipDeadline}</h6>
                    <p>{scholarshipDescription}</p>
                    <a class = "btn btn-primary mt-2" href={scholarshipURL} role="button">Apply</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                    <Button color = "primary" onClick={routeChange}>Save</Button>
                </Card>
            </Col>
        </div>
    );
};

export default GridCard;