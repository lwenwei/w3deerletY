import { Row, Col } from 'antd';

import ContentTitle from './content/title'
import ContentDesc from './content/description'

export default function Content() {
    return (
        <>
            <Row>
                <Col span={12}>
                    <ContentTitle bgColor="#ff7875" />
                </Col>
                <Col span={12}>
                    <ContentDesc bgColor="#fff1f0" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ContentDesc bgColor="#fff2e8" />
                </Col>
                <Col span={12}>
                    <ContentTitle bgColor="#ff9c6e" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ContentTitle bgColor="#ffc069" />
                </Col>
                <Col span={12}>
                    <ContentDesc bgColor="#fff7e6" />
                </Col>
            </Row>
        </>
    );
}