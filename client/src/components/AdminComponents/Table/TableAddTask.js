import { clear } from '@testing-library/user-event/dist/clear';
import { Button, Form, Input, Popconfirm, Select, Table } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const TableAddTask = (col) => {
    const array = [
        {
            id: "A104",
            name: 'Thành lập doanh nghiệp'
        },
        {
            id: "A105",
            name: 'ở tù'
        }
    ]
    const arrtemp = array.map((value, index) => {
        return {
            label : value.name,
            value: `[${value.id}] ${value.name}`
        }
    })
   
    const [dataSource, setDataSource] = useState([]);
    const [count, setCount] = useState(2);
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const EditableCell = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);
        const inputRef = useRef(null);
        const form = useContext(EditableContext);
        useEffect(() => {
            if (editing) {
                inputRef.current.focus();
            }
        }, [editing]);
        const toggleEdit = () => {
            setEditing(!editing);
            console.log(record[dataIndex]);
            // form.setFieldsValue({
            //     [dataIndex]: record[dataIndex],
            // });
            if (record[dataIndex].$$typeof === undefined) {
                form.setFieldsValue({
                    [dataIndex]: record[dataIndex],
                });
            };
        };
        const save = async () => {
            try {
                const values = await form.validateFields();
                toggleEdit();
                handleSave({
                    ...record,
                    ...values,
                });
                console.log(values);
            } catch (errInfo) {
                console.log('Save failed:', errInfo);
            }
        };
        let childNode = children;
        let typeInput = ['Select', 'Input'];
        if (editable) {
            console.log(dataIndex);
            if (editing) {
                if (dataIndex === 'name') {
                    childNode = <Form.Item
                        style={{
                            margin: 0,
                        }}
                        name={dataIndex}
                        rules={[
                            {
                                required: true,
                                message: `${title} is required.`,
                            },
                        ]}
                    >
                        <Select options={arrtemp} ref={inputRef} />


                    </Form.Item>
                }
                else {
                    childNode = (

                        <Form.Item
                            style={{
                                margin: 0,
                            }}
                            name={dataIndex}
                            rules={[
                                {
                                    required: true,
                                    message: `${title} is required.`,
                                },
                            ]}
                        >
                            <Input ref={inputRef} onPressEnter={save} onBlur={save} />

                        </Form.Item>
                    )
                }
            }
            else {
                childNode = (
                    <div
                        className="editable-cell-value-wrap"
                        style={{
                            paddingRight: 24,
                        }}
                        onClick={toggleEdit}
                    >
                        {children}
                    </div>
                )

            }
        }
        return <td {...restProps}>{childNode}</td>;
    };
    const defaultColumns = [
        {
            title: 'STT',
            dataIndex: 'index',
            editable: true,
        },
        {
            title: 'Tên công việc',
            dataIndex: 'name',
            editable: true,
        },
        {
            title: 'Phân công cho',
            dataIndex: 'phancong',
            editable: true,
        },
        {
            title: 'Số giờ dự kiến ban đầu',
            dataIndex: 'time',
            editable: true,
        },
        {
            title: 'Hạn chót',
            dataIndex: 'timend',
            editable: true,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];
    const handleAdd = () => {
        const newData = {
            key: count,
            name: <Input />,
            phancong: <Input />,
            time: <Select />,
            timeend: <Input />
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });
    return (
        <div>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Thêm mới
            </Button>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
};
export default TableAddTask;