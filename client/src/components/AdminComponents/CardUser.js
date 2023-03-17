import { avatar } from '~/assets/images';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Skeleton, Space, Switch, Tag } from 'antd';
import { useState } from 'react';
const { Meta } = Card;
function CardUser({ info }) {

    return (
        <Card
            className='card-info'
        >
            <Meta
                avatar={<Avatar shape='square' size={60} src={info.type == 1 ? avatar.company : avatar.user} />}
                title={info.name}

                description={
                    <>

                        <Row>
                            <Col md={{span: 16}} sm={{span: 24}} xs={{span: 16}}>{info.address} </Col>
                            <Col md={{span: 8}} sm={{span: 24}} xs={{span: 8}}>
                                <Tag color={
                                        info.type == 1 ? "volcano" : "geekblue"}>
                                    {info.type == 1 ? "Company" : "Cá nhân"}
                                </Tag>
                            </Col>
                        </Row>
                        <p>
                            {info.email}
                        </p>
                    </>
                }
            />
        </Card>
    );
}

export default CardUser;