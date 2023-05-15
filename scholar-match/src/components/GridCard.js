import { Card, Col } from 'antd'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import scholarshipLogo from '../images/gradcap.png'
import Button from 'react-bootstrap/Button'
import { useState} from 'react';

const { Meta } = Card;

const GridCard = ({scholarship, scholarships, setScholarships}) => {

    //const [showModal, setShowModal] = useState(false);
    const [disabled, setDisabled] = useState(false);

    //let navigate = useNavigate();
    const deleteSavedScholarship = () =>{
        setScholarships(scholarships.map(oldScholarship => oldScholarship.Id === scholarship.Id ? {...oldScholarship, Saved: false} : {...oldScholarship}))
        alert("Scholarship Successfully Unsaved")
        setDisabled(true)
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
                    <a class = "btn btn-primary mt-2" href={scholarship.URL} role="button">APPLY</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button disabled={disabled} color = "primary" onClick={deleteSavedScholarship}>Unsave</Button>
                </Card>
            </Col>
        </div>
    );
};

export default GridCard;

/*const GridCard = ({}) => {
    return ( 
        <div class="mt-2">
            <Col>
                <Card hoverable style={{ width: 330 }} cover={<img src={scholarshipLogo} alt="pic of grad cap"></img>}>
                    <Meta title="Sample Saved Scholarship" description="More info will be put about each scholarship here" />
                        <a class="btn btn-primary mt-2" href="#" role="button">Apply</a>
                </Card>
            </Col>
        </div>
    );
};*/