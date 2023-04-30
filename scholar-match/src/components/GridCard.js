import { Card, Col } from 'antd'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import scholarshipLogo from '../images/gradcap.png'

const { Meta } = Card;

const GridCard = ({scholarshipName, scholarshipDescription, scholarshipAmount, scholarshipDeadline, scholarshipURL}) => {
    return (
        <div class="mt-2">
            <Col>
                <Card hoverable style={{ width: 330 }} cover={<img src={scholarshipLogo} alt="pic of grad cap"></img>}>
                    <Meta title={scholarshipName} description={scholarshipDescription} />
                        <a class="btn btn-primary mt-2" href={scholarshipURL} role="button">Apply</a>
                </Card>
            </Col>
        </div>
    );
};

export default GridCard;