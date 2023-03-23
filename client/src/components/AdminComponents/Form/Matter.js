import { Button, Col, Form, Input, Radio, Row, Space, Tabs, Select } from "antd";
import { useState } from "react";
import { TableAddFile, TableAddRow } from "~/components";
import { Editor } from 'react-draft-wysiwyg';
import FormAddTask from "./FormAddTask";
import FormAddPeriod from "./FormAddPeriod";
import FormAddFee from "./FormAddFee";
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        md: {
            span: 10,
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        md: {
            span: 14
        }
    }
};
const wrapperStyle = {
    border: '1px solid #F1F1F1',
    padding: '10px',
    minHeight: '40vh'
}
const label = [
    'Nội bộ được phép truy cập',
    'Khách hàng được phép truy cập'
]
const columnsContact = [

]

function FormMatter() {
    const items = [
        {
            key: '1',
            label: `Mô tả`,
            children: <Editor />,
        },
        {
            key: '2',
            label: `Giấy tờ`,
            children: <TableAddFile />,
        },
        {
            key: '3',
            label: `Liên hệ`,
            children: <TableAddRow />,
        },
        {
            key: '4',
            label: `Công việc`,
            children: <FormAddTask />,
        },
        {
            key: '5',
            label: `Phí cố định`,
            children: <FormAddPeriod />,
        },
        {
            key: '6',
            label: `Chi phí`,
            children: <FormAddFee />,
        }
    ];
    const [value, setValue] = useState(2);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChangeTab = (key) => {
        console.log(key);
    };
    return (
        <>
            <Form {...formItemLayout}>
                <Row>
                    <Col span={12} pull={2}>
                        <Form.Item
                            label="Tên vụ việc"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input name matter!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} pull={2}>
                        <Form.Item
                            label="Luật sư phụ trách"
                            name="name"
                        >
                            <Select
                                showSearch
                                allowClear
                                style={{
                                    width: '100%',
                                }}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                      },
                                      {
                                        value: 'lucy',
                                        label: 'Lucy',
                                      },
                                      {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                      },
                                      {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                      },
                                ]}
                            />
                        </Form.Item>
                    </Col>

                </Row>

                <Row>
                    <Col span={12} pull={2}>
                        <Form.Item
                            label="Khách hàng"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input name matter!',
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                allowClear
                                style={{
                                    width: '100%',
                                }}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                      },
                                      {
                                        value: 'lucy',
                                        label: 'Lucy',
                                      },
                                      {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                      },
                                      {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                      },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12} pull={2}>
                        <Form.Item
                            label="Luật sư ban đầu"
                            name="name"
                        >
                             <Select
                                showSearch
                                allowClear
                                style={{
                                    width: '100%',
                                }}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                      },
                                      {
                                        value: 'lucy',
                                        label: 'Lucy',
                                      },
                                      {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                      },
                                      {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                      },
                                ]}
                            />
                        </Form.Item>
                    </Col>

                </Row>
                <Row>
                    <Col span={12} pull={2}>
                        <Form.Item
                            label="Hiển thị"
                            name="show"
                        >
                            <Radio.Group onChange={onChange} value={value}>
                                <Space direction="vertical">
                                    <Radio value={0}>Tài khoản nội bộ đã mời</Radio>
                                    <Radio value={1}>Tài khoản khách hàng đã mời</Radio>
                                    <Radio value={2}>Tất cả người dùng nội bộ</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    {value < 2 ?
                        <Col span={12} pull={2}>
                            <Form.Item
                                label={label[value]}
                                name="nameShow"
                            >
                                 <Select
                                 mode="multiple"
                                showSearch
                                allowClear
                                style={{
                                    width: '100%',
                                }}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                      },
                                      {
                                        value: 'lucy',
                                        label: 'Lucy',
                                      },
                                      {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                      },
                                      {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                      },
                                ]}
                            />
                            </Form.Item>
                        </Col> : <></>
                    }
                </Row>
                <Form.Item
                    wrapperCol={{
                        md: 24
                    }}>
                    <Tabs style={{ width: '100%' }} type="card" defaultActiveKey="1" items={items} onChange={onChangeTab} />
                </Form.Item>
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

export default FormMatter;