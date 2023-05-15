import { Card, Col, Modal } from 'antd'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import scholarshipLogo from '../../images/gradcap.png'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

const ScholarshipCard = ({scholarship, scholarships, setScholarships}) => {

    const [disabled, setDisabled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const saveScholarship = () =>{
        setScholarships(scholarships.map(oldScholarship => oldScholarship.Id === scholarship.Id ? {...oldScholarship, Saved: true} : {...oldScholarship}))
        alert("Scholarship Successfully Saved")
        setDisabled(true)
    }

    const changeShowModal = () =>{
        setShowModal(!showModal)
    }

    return (
        <div onClick={changeShowModal} class="mt-2">
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
                    <Button disabled = {disabled} variant = "primary" onClick={saveScholarship}>Save</Button>
                </Card>
            </Col>
            <Modal 
                open={showModal} 
                footer={[
                    <a class = "btn btn-primary mt-2" href={scholarship.URL} role="button">Apply</a>,
                    <Button disabled = {disabled} variant = "primary" onClick={saveScholarship}>Save</Button>
                ]}>
                    <h3 style={{textAlign: 'center'}}>{scholarship.Name}</h3>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <h5>${scholarship.Amount}</h5>
                        <h5><b>Deadline: </b>{scholarship.Deadline}</h5>
                    </div>
                    <h6>Amount of Awards Offered: {scholarship.Awards}</h6>
                    <h5>Eligibility: </h5>
                    <p>{scholarship.Eligibility}</p>
                    <h5>Description: </h5>
                    <p>{scholarship.Description}</p>
            </Modal>
        </div>
    );
};

export default ScholarshipCard;