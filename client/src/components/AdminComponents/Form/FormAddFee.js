import { Button, Form, Modal, Popconfirm, Select, Table, 
    Space, Divider, InputNumber, Input, Row, Col, Upload, Tag } from "antd";
import { useEffect, useState } from "react";
import {
    PlusOutlined
} from '@ant-design/icons';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import Title from "antd/es/typography/Title";
import moment from "moment";
import { useStore, useToken } from "~/store";
import axios from "axios";
import { Option } from "antd/es/mentions";
import { feeService } from "~/services";
import UploadImg from "../UploadImg";
import AvatarChanger from "../UploadImg";

dayjs.extend(customParseFormat);
const statusText = ['Đã trình', 'Đã duyệt', 'Đã kết toán']
function FormAddFee({ props }) {

    const [form] = Form.useForm();
    const { token } = useToken()
    const [state, dispatch] = useStore();
    const [dataSource, setDataSource] = useState([]);
    const [fee, setFee] = useState([])
    const [bank, setBank] = useState([]);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        axios('https://api.vietqr.io/v2/banks')
            .then(rs => {
                setBank(rs.data.data);
            })
            .catch(err => {
                console.log(err);
            })
        const getChiPhiPhatSinh = async () => {
            setFee((await feeService.findByMatter({ id: state.matter._id })).data)
        }
        getChiPhiPhatSinh()
    }, [])

    useEffect(() => {
        fee.map((value, index) => {
            setDataSource([
                ...dataSource,
                {
                    key: index,
                    _id: value._id,
                    ngay_lap: value.ngay_lap,
                    mo_ta: value.mo_ta,
                    staff: value.nhan_vien.ho_ten,
                    status: value.status,
                    don_gia: `${value.don_gia}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' đ'
                }
            ])
        })

    }, [fee])
    const handleDelete = async (value) => {
        try {
            let rs = (await feeService.delete(value)).data
        } catch (err) {
            console.log(err);
        }
    }
    const handleAdd = async (values) => {
        try {
            let result = (await feeService.create(values)).data;
        }
        catch (err) {
            console.log(err);
        }
    }
    const onFinish = (values) => {
        const newVal = {
            ngay_lap: moment(new Date()).format('DD-MM-YYYY LTS'),
            mo_ta: values.mo_ta,
            don_gia: values.don_gia,
            so_hoa_don: values.idHD,
            vu_viec: state.matter._id,
            nhan_vien: token._id,
            status: 0,
            tai_khoan: {
                ngan_hang: values.nameBank,
                chu_tai_khoan: values.nameCreditCard,
                so_tai_khoan: values.numberCreditCard
            }
        }
        console.log(values);
        form.resetFields();
        handleAdd(newVal)
        // edit ? handleUpdate(newVal, edit.key) : 
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const columns = [
        {
            title: 'Ngày lập',
            dataIndex: 'ngay_lap',
            width: 200
        },
        {
            title: 'Mô tả',
            dataIndex: 'mo_ta',
            width: 200
        },
        {
            title: 'Nhân viên',
            dataIndex: 'staff',
            width: 200
        },
        {
            title: 'Tổng',
            dataIndex: 'don_gia',
            width: 150
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (status) => (
                <Tag
                    color={status === 0 ? 'volcano' : status === 1 ? 'geekblue' : 'success'}
                >
                    {statusText[status]}
                </Tag>
            ),
        },
        {
            title: 'Thao tác',
            dataIndex: 'operation',
            render: (_, record) => (
                <Space split={<Divider type="vertical" />}>
                    <Popconfirm title="Sure to delete?">
                        <Button onClick={() => handleDelete(record._id)}>Delete</Button>
                    </Popconfirm>
                </Space>)
        },
    ];

    return (
        <>
            <Button type="primary" onClick={() => { setOpen(true) }}
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
                    // onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    fields={[
                        {
                            name: ['matter'],
                            value: state.matter.ten_vu_viec
                        },
                        {
                            name: ['staff'],
                            value: state.matter.luat_su.ho_ten
                        },
                        {
                            name: ['customer'],
                            value: state.matter.khach_hang.ho_ten
                        }
                    ]
                    }
                >
                    <Row>
                        <Col span={24} pull={4}>
                            <Form.Item
                                label="Mô tả"
                                name="mo_ta"
                            >
                                <Input placeholder="VD: Ăn trưa với khách hàng A" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10} push={1}>
                            <Form.Item
                                label="Tổng tiền"
                                name="don_gia"
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
                        </Col>
                        <Col span={10} push={2}>
                            <Form.Item
                                label="Vụ việc"
                                name="matter"
                            >
                                <Input
                                    style={{
                                        width: 250,
                                    }}
                                    disabled='true'
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
                                    disabled='true'
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>

                        <Col span={10} push={2}>
                            <Form.Item>
                                <Title level={5}>Tài khoản bồi hoàn</Title>
                            </Form.Item>
                            <Form.Item
                                label="Ngân hàng"
                                name="nameBank"
                            >
                                <Select>
                                    {bank.map((value, index) => {
                                        return (
                                            <Option
                                                value={value.code + ' - ' + value.name}
                                                key={index}>
                                                {value.code + ' - ' + value.name}
                                            </Option>
                                        )
                                    })}
                                </Select>
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
                        <Col span={10} push={4}>
                            <Form.Item>
                                <Title level={5}>Hình ảnh hóa đơn (nếu có)</Title>
                            </Form.Item>
                            <Form.Item>
                             <AvatarChanger/>
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
                        {/* <Button type="primary" htmlType="submit">
                            Tạo mới
                        </Button> */}
                    </Form.Item>
                </Form>
            </Modal>
            <Table dataSource={dataSource} columns={columns} />
        </>
    );
}

export default FormAddFee;