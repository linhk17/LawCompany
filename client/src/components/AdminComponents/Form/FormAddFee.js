import { Button, Form, Modal, Popconfirm, Select, Table, DatePicker, Space, Divider, InputNumber, Input, Row, Col, Checkbox } from "antd";
import { useState } from "react";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import Title from "antd/es/typography/Title";
import moment from "moment";
function FormAddFee() {
    dayjs.extend(customParseFormat);
    const dateFormat = 'YYYY-MM-DD';
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState([]);
    const [dataTemp, setDatatemp] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(null);
    const [date, setDate] = useState();

    const arr = [
        {
            label: '123',
            value: '123'
        },
        {
            label: '456',
            value: '456'
        }
    ]
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        const newDataTemp = dataTemp.filter((item) => item.key !== key);
        setDataSource(newData);
        setDatatemp(newDataTemp);
    };
    const handleAdd = (values) => {
        const key =  moment(values.timeCreate).format('DDMMYYYYhhmmss')
        setOpen(false);
        setDataSource([...dataSource, {
            ...values,
            key: key,
            total: values.total.toLocaleString(
                'vi', { style: 'currency', currency: 'VND' }),
        }])
        setDatatemp([
            ...dataTemp,
            {
                ...values,
                key: key,
                total: values.total
            }
        ])

    }
    console.log(dataTemp);
    console.log(dataSource);
    const handleUpdate = (newVal) => {
        console.log(newVal);
        setOpen(false);
    }
    const handleFormatDate = (date, dateString) => {
        setDate(dateString)
    }
    const onFinish = (values) => {
        const newVal = {
            ...values,
            timeCreate: moment(new Date()).format('DD-MM-YYYY LTS'),
        }
        form.resetFields();
        edit ? handleUpdate(newVal) : handleAdd(newVal)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const columns = [
        {
            title: 'Ngày lập',
            dataIndex: 'timeCreate',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
        },
        {
            title: 'Nhân viên',
            dataIndex: 'staff',
        },
        {
            title: 'Tổng',
            dataIndex: 'total',
        },
        {
            title: 'Tình trạng hóa đơn',
            dataIndex: 'status',
        },
        {
            title: 'Thao tác',
            dataIndex: 'operation',
            render: (_, record) => (
                <Space split={<Divider type="vertical" />}>
                    <Button onClick={() => {
                        setEdit(record)
                        setOpen(true)
                    }}>Edit</Button>
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <Button>Delete</Button>
                    </Popconfirm>
                </Space>)
        },
    ];
    return (
        <>
            <Button type="primary" onClick={() => {
                setEdit(null)
                console.log(edit);
                setOpen(true)
            }}
            >
                Thêm mới
            </Button>
            <Modal
                title={
                    <>
                        <Title level={4}>Thêm công việc</Title>
                        <Divider />
                    </>
                }
                centered
                open={open}
                footer={null}
                width={1000}
                onCancel={() => setOpen(false)}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 1000,
                    }}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    fields={
                        edit ? [
                            {
                                name: ["description"],
                                value: edit.description,
                            },
                            {
                                name: ["typeFee"],
                                value: edit.typeFee,
                            },
                            {
                                name: ["total"],
                                value:(edit.total).replace('₫', ''),
                            },
                        ] : null
                    }
                >
                    <Row>
                        <Col span={24} pull={4}>
                            <Form.Item
                                label="Mô tả"
                                name="description"
                            >
                                <Input placeholder="VD: Ăn trưa với khách hàng A" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10} push={1}>
                            <Form.Item
                                label="Loại chi chí"
                                name="typeFee"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn loại chi phí !',
                                    },
                                ]}
                            >
                                <Select
                                    style={{
                                        width: 250
                                    }}
                                    options={arr} />
                            </Form.Item>
                            <Form.Item
                                label="Tổng tiền"
                                name="total"
                            >
                                <InputNumber
                                    style={{
                                        width: 250
                                    }}
                                    min={1}
                                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                    addonAfter="đ"
                                />
                            </Form.Item>

                        </Col>
                        <Col span={10} push={2}>
                            <Form.Item
                                label="Mã / Số hóa đơn"
                                name="idHD"
                            >
                                <Input
                                    style={{
                                        width: 250,
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Nhân viên"
                                name="staff"
                            >
                                <Input
                                    style={{
                                        width: 250,
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Vụ việc"
                                name="matter"
                            >
                                <Input
                                    style={{
                                        width: 250,
                                    }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={10} push={1}>
                            <Form.Item>
                                <Checkbox>
                                    <Title level={5}>Thêm vào hóa đơn khách hàng</Title>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item
                                label="Khách hàng"
                                name="customer"
                            >
                                <Input
                                    style={{
                                        width: 250,
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={10} push={2}>
                            <Form.Item>
                                <Title level={5}>Tài khoản bồi hoàn</Title>
                            </Form.Item>
                            <Form.Item
                                label="Ngân hàng"
                                name="nameCreditCard"
                            >
                                <Select options={arr} />
                            </Form.Item>
                            <Form.Item
                                label="Tên tài khoản"
                                name="nameCreditCard"
                            >
                                <Input
                                    style={{
                                        width: 250,
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Số tài khoản"
                                name="numberCreditCard"
                            >
                                <Input
                                    style={{
                                        width: 250,
                                    }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider />
                    <Form.Item
                        wrapperCol={{
                            offset: 18,
                            span: 6,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Tạo mới
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Table dataSource={dataSource} columns={columns} />
        </>
    );
}

export default FormAddFee;