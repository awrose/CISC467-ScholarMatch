import { Card, Col, Modal, Button } from 'antd'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import scholarshipLogo from '../../images/gradcap.png'
import '../../styling_sheets/homePage.css';
//
import { useState } from 'react';

const ScholarshipCard = ({scholarship, scholarships, setScholarships}) => {
    const [showModal, setShowModal] = useState(false);

    const saveScholarship = () =>{
        setScholarships(scholarships.map(oldScholarship => oldScholarship.Id === scholarship.Id ? {...oldScholarship, Saved: true} : {...oldScholarship}))
        alert("Scholarship Successfully Saved")
        if(showModal){
            changeShowModal()
        }
    }

    const changeShowModal = () =>{
        setShowModal(!showModal)
    }

    return (
        <div class="mt-2">
            <Col>
                <Card hoverable style={{ width: 330 }} cover={<img src={scholarshipLogo} alt="pic of grad cap"></img>}>
                    <h3>{scholarship.Name}</h3>
                    <h5 >${scholarship.Amount}</h5>
                    <h6 ><b>Deadline: </b>{scholarship.Deadline.toLocaleString()}</h6>
                    <p class="scroll">{scholarship.Description}</p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button style={{align: "center", display: "block"}} variant = "primary" onClick={changeShowModal}>More</Button>
                    </div>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <Button href = {scholarship.URL} type = "primary" >Apply</Button>
                        <Button disabled = {scholarship.Saved} type = "primary" onClick={saveScholarship}>Save</Button>
                    </div>
                </Card>
            </Col>
            <Modal 
                open={showModal} 
                onOk={changeShowModal}
                onCancel={changeShowModal}
                footer={[
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                            <Button href = {scholarship.URL} type = "primary" >APPLY</Button>
                        <Button disabled = {scholarship.Saved} type = "primary" onClick={saveScholarship}>Save</Button>
                    </div>
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