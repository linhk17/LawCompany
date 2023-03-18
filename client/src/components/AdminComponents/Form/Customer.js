import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Col, Form, Input, Radio, Row, Space } from "antd";
import { avatar } from "~/assets/images";
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        md: {
            span: 8,
        },
    }
};
function FormCustomer({ user }) {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('ok', values);
    }
    return (
        <>

            <Form {...formItemLayout}
                fields={[
                    {
                        name: ["name"],
                        value: user.name,
                    },
                    {
                        name: ["address"],
                        value: user.address,
                    },
                    {
                        name: ["phone"],
                        value: user.phone,
                    },
                    {
                        name: ["email"],
                        value: user.email,
                    },
                    {
                        name: ["mobile"],
                        value: ""
                    },
                    {
                        name: ["type"],
                        value: 0
                    }
                ]}
                form={form}
                onFinish={onFinish}
            >
                <Row>
                    <Col md={{ span: 8 }}>
                        <Form.Item
                            label="Họ tên"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 8, push: 1 }}>
                        <Form.Item
                            label="Di động"
                            name="mobile"
                            rules={[
                                {
                                    type: 'phone',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 4, push: 3 }}>
                        <div className="edit-img">
                          <Avatar size={150} style={{
                            position: 'absolute'
                        }} src={avatar.user} />  
                        
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8 }}>
                        <Form.Item
                            label="Địa chỉ"
                            name="address"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 8, push: 1 }}>
                        <Form.Item
                            name="phone"
                            label="Số điện thoại"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8 }}>
                        <Form.Item
                            label="Nghề nghiệp"
                            name="job"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 8, push: 1 }}>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8 }}>
                        <Form.Item
                            label="Tag"
                            name="tag"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 8, push: 1 }}>
                        <Form.Item
                            name="website"
                            label="Website"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 8, push: 1 }}>

                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8 }}></Col>
                    <Col md={{ span: 8, push: 4 }}>
                        <Form.Item
                            name="type"
                        >
                            <Radio.Group>
                                <Radio value={1}>Cá nhân</Radio>
                                <Radio value={2}>Doanh nghiệp</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    wrapperCol={{
                        offset: 20,
                    }}
                >
                    <Button type="primary" htmlType="submit" className="btn-primary">SAVE</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default FormCustomer;