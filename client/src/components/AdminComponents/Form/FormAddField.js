import { Button, Form, TimePicker, Modal, Popconfirm, Select, Table, DatePicker, Space, Divider} from "antd";
import { useState } from "react";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
const format = 'HH:mm';
function TableAddFile() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(null);
    const [date, setDate] = useState();
    const [time, setTime] = useState()
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
        setDataSource(newData);
    };
    const handleAdd = (values) => {
        setOpen(false);
        console.log(values);
        setDataSource([...dataSource, values])
    }
    const handleUpdate = (newVal) => {
        setOpen(false);
    }
    const handleFormatDate = (date, dateString) => {
        setDate(dateString)
    }
    const handleFormatTime = (time, timeString) => {
        setTime(timeString)
    }
    const onFinish = (values) => {
        const newVal = {
            key: 3,
            name: values.name,
            phancong: values.phancong,
            time: time,
            timeend: date
        }
        edit ? handleUpdate(newVal) : handleAdd(newVal)

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
        },
        {
            title: 'Tên công việc',
            dataIndex: 'name',
        },
        {
            title: 'Phân công cho',
            dataIndex: 'phancong',
        },
        {
            title: 'Số giờ dự kiến ban đầu',
            dataIndex: 'time',
        },
        {
            title: 'Hạn chót',
            dataIndex: 'timeend',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
        },
        {
            title: 'operation',
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
    console.log(edit);
    return (
        <>
            <Button type="primary" onClick={() => {
                setEdit(null)
                setOpen(true)
            }}
            >
                Thêm công việc
            </Button>
            <Modal
                title="Thêm mới"
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
                        maxWidth: 600,
                    }}
                    fields={
                        edit ? [
                            {
                                name: ["name"],
                                value: edit.name,
                            },
                            {
                                name: ["phancong"],
                                value: edit.phancong,
                            },
                            {
                                name: ["time"],
                                value: dayjs(`Wed Mar 25 2015 ${time}:00 GMT+0700 (Indochina Time)`),
                            },
                            {
                                name: ["timeend"],
                                value: dayjs(edit.timeend),
                            }
                        ] : null
                    }

                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tên công việc"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Select options={arr} />
                    </Form.Item>

                    <Form.Item
                        label="Phân công cho"
                        name="phancong"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Select options={arr} />
                    </Form.Item>
                    <Form.Item
                        label="Số giờ dự kiến"
                        name="time"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <TimePicker format={format} onChange={handleFormatTime} />

                    </Form.Item>
                    <Form.Item
                        label="Hạn chót"
                        name="timeend"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <DatePicker format={dateFormat} onChange={handleFormatDate} />
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
            </Modal>
            <Table dataSource={dataSource} columns={columns} />
        </>
    );
}

export default TableAddFile;