import Highlighter from "react-highlight-words";
import User from "./User";
import { useRef } from "react";
import { Button, Input, Space } from "antd";
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';

function StaffManager() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder='Nhập từ khoá tìm kiếm'
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columnsStaff = [
        {
            title: 'Họ tên',
            dataIndex: 'name',
            ...getColumnSearchProps('name')
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'dateOfBirth',
            ...getColumnSearchProps('dateOfBirth')
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            ...getColumnSearchProps('name')
        },
        {
            title: 'Email',
            dataIndex: 'email',
            ...getColumnSearchProps('email')
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            ...getColumnSearchProps('address')

        },
        {
            title: 'Bộ phận',
            dataIndex: 'boPhan',
            filters: [
                {
                    text: 'Luật sư',
                    value: 'Luật sư'
                },
                {
                    text: 'Kế toán',
                    value: 'Kế toán'
                },
                {
                    text: 'Tư vấn pháp lý',
                    value: 'Tư vấn pháp lý'
                }
            ],
            onFilter: (value, record) => record.boPhan.startsWith(value),

        },
        {
            title: 'Chức vụ',
            dataIndex: 'chucVu',
            filters: [
                {
                    text: 'Luật sư',
                    value: 'Luật sư'
                },
                {
                    text: 'Trợ lý luật sư',
                    value: 'Trợ lý luật sư'
                },
                {
                    text: 'Kế toán',
                    value: 'Kế toán'
                },
                {
                    text: 'Tư vấn viên',
                    value: 'Tư vấn viên'
                }
            ],
            onFilter: (value, record) => record.chucVu.startsWith(value),
        },
    ];
    return ( 
        <>
            <User props={2} columns={columnsStaff}/>
        </>
     );
}

export default StaffManager;