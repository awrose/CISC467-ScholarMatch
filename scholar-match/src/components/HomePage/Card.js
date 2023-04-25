import { Card, Col } from 'antd'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import scholarshipLogo from '../../images/gradcap.png'

const { Meta } = Card;

const GridCard = ({scholarshipName, scholarshipDescription, scholarshipAmount, scholarshipDeadline}) => {
    return (
        <div class="mt-2">
            <Col>
                <Card hoverable style={{ width: 330 }} cover={<img src={scholarshipLogo} alt="pic of grad cap"></img>}>
                    <h3>{scholarshipName}</h3>
                    <h5 >${scholarshipAmount}</h5>
                    <h6 >Deadline</h6>
                    <p>{scholarshipDescription}</p>
                        <a class="btn btn-primary mt-2" href="#" role="button">Apply</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a class="btn btn-primary mt-2" href="#" role="button">Save</a>
                </Card>
            </Col>
        </div>
    );
};

export default GridCard;