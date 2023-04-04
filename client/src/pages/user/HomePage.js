import { notification, Col, Row, Card, Space, Divider, Button, FloatButton, Typography, Avatar, Form, Input, Rate, message } from "antd";
import {
    SlackOutlined,
    RightOutlined,
    QuestionCircleOutlined,
    CheckOutlined,
    WechatFilled
} from '@ant-design/icons';
import "~/assets/style/User/HomePage.scss";
import { attribute, lawer } from "~/dataUI";
import { banner, avatar, lawers } from '~/assets/images/index';
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";
import TextArea from "antd/es/input/TextArea";
import Message from "~/components/Message";
import { useState } from "react";
import { quoteService } from "~/services";
import Meta from "antd/es/card/Meta";

const { Text } = Typography;
function HomePage() {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [messageApi, contextHolderMess] = message.useMessage();

    const onFinish = async (values) => {
        const data = {
            khach_hang: {
                ho_ten: values.fullname,
                sdt: values.sdt,
                email: values.email
            },
            van_de: values.description,
            status: 0
        }

        try {
            await quoteService.create(data).data;
            messageApi.open({
                type: 'success',
                content: "Gửi yêu cầu báo giá thành công",
              })

        }
        catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Gửi yêu cầu thất bại',
              });
            console.log(error);
        }
        form.resetFields();
    }
    const openNotification = (placement) => {
        api.open({
            duration: false,
            message: <Space size={20}>
                <Avatar size='large' src={avatar.tuvan} />
                <Space direction="vertical" size={1}> <Title level={5}>LawKim kính chào Quý khách </Title>
                    <Text italic>
                        Quý Khách cần thêm thông tin xin hãy điền vào thông tin bên dưới.
                        Chúng tôi sẽ liên hệ với bạn.</Text>
                </Space>

            </Space>,
            description: <Card title="Yêu cầu báo giá">
                <Form
                    form={form}
                    layout="vertical"
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Họ và tên"
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullname!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="sdt"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your number phone!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Vấn đề của bạn"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <TextArea />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>,
            placement,

        })
    };
    return (
        <>
            <section className="banner-home">
                <img alt="" src={banner.bannerTop} />
                <Space size={20} direction="vertical" className='text-banner' >
                    <Space size={10} direction="vertical">
                        <p>master law firm marketing</p>
                        <span className="title-banner">we make mass tork easy</span>
                    </Space>
                    <button className="btn-light-blue">get started</button>
                </Space>
            </section>
            <section className="banner-attribute">
                <h1>LĨNH VỰC HÀNH NGHỀ</h1>
                <Divider style={{ color: `var(--deep-blue)` }}><SlackOutlined /></Divider>
                <Row className="list-banner-attribute">
                    {attribute.map((value, index) => {
                        return (
                            <Col key={index} md={{ span: 6 }} xs={{ span: 12 }}>
                                <Card
                                    hoverable
                                    className="attribute-card"
                                >
                                    <img alt="" src={value.img} />
                                    <p>{value.title}</p>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </section>
            <section className="banner-info">
                <Row>
                    <Col md={{ span: 14 }}>
                        <Space size={20} direction="vertical" className='text-banner-info'>
                            <Space size={10} direction="vertical">
                                <h1>CHÚNG TÔI Ở ĐÂY</h1>
                                <p>Để giải đáp mọi vướng mắc về pháp luật cho bạn</p>
                                <p> Quyền lợi của bạn là ưu tiên hàng đầu của chúng tôi,
                                    Hãy gửi yêu cầu nếu bạn cần luật sư giải quyết mọi vấn đề pháp lý của mình.</p>
                            </Space>
                            <Button type="primary" className="btn-dark-blue">Gửi yêu cầu  <RightOutlined /></Button>
                        </Space>
                    </Col>
                    <Col md={{ span: 10 }}>
                        <img alt="" src={banner.bannerHere} />
                    </Col>
                </Row>
            </section>
            <section className="banner-list-lawer">
                <h1 style={{ marginLeft: 40 }}>ĐỘI NGŨ LUẬT SƯ</h1>
                <Divider></Divider>
                <Row>
                    {lawer.map((lawer, index) => {
                        return (
                            <Col md={{ span: 7, push: 1 }} xs={{ span: 12 }} key={index} className="list-lawer-card">
                                <Card
                                    hoverable
                                    cover={<img alt="" src={lawer.avt} />}
                                    actions={[
                                        <Rate allowHalf defaultValue={2.5} />
                                    ]}
                                >
                                    <Avatar
                                        style={{
                                            marginTop: '-26%',
                                            marginLeft: '36%',
                                            backgroundColor: 'green'
                                        }}
                                        shape="circle"
                                        icon={<CheckOutlined />}
                                        size={60} />

                                    <Space direction="vertical" size={20}>
                                        <Meta title={lawer.name} />
                                        <p>{lawer.description}</p>
                                    </Space>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </section>
            <FloatButton
                trigger="click"
                type="primary"
                style={{
                    left: 50,
                }}
                onClick={() => openNotification('bottomLeft')}
                icon={<WechatFilled />}
            >
            </FloatButton>
            {contextHolder}
            <FloatButton.Group
                trigger="hover"
                style={{
                    right: 20
                }}
                icon={<QuestionCircleOutlined />}
            >
                <Link to='/quote-register'>
                    <FloatButton tooltip={<div>Báo giá</div>} />
                </Link>
                <br />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
            {contextHolderMess}
        </>
    );
}

export default HomePage;