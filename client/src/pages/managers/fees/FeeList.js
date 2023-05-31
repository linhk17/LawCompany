import { Button, Card, Input, Space, Table, Tag } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { feeService } from "~/services";
import {
    UsbFilled,
    SearchOutlined,
    ReconciliationFilled
} from '@ant-design/icons';
import { useToken } from "~/store";
import Highlighter from "react-highlight-words";
import { useRef } from "react";
import ModalAddFee from "../matters/ModalAddFee";
const statusText = ['Đã trình', 'Đã duyệt', 'Đã kết toán']

function FeeList() {

    let { id } = useParams();
    const { token } = useToken();
    const [fee, setFees] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [isModalOpenFee, setIsModalOpenFee] = useState(false);

    let navigate = useNavigate()
    let url = 'admin'
    if (token.chuc_vu._id === 'LS02')
        url = 'staff'
    else if (token.chuc_vu._id === 'TL02')
        url = 'tro-ly'
    else if (token.chuc_vu._id === 'KT02')
        url = 'ke-toan'
    useEffect(() => {
        const getFees = async () => {
            const result = (await feeService.get()).data;
            const arr = id === 'all' ? result : result.filter(item => item.status == id)
            setFees(arr);
        }
        getFees()
    }, [id])

    const data = fee.length > 0 ? fee.map((value, index) => {
        return {
            _id: value._id,
            key: index + 1,
            mo_ta: value.mo_ta,
            don_gia: `${value.don_gia}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' đ',
            ngay_lap: moment(value.ngay_lap).format('DD-MM-YYYY LT'),
            staff: value.nhan_vien.ho_ten,
            status: value.status
        }
    }) : null
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
                    placeholder={dataIndex == 'date' ? 'VD: 08-05-2023' : `Nhập từ khoá tìm kiếm`}
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
    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            width: 60
        },
        {
            title: 'Mô tả',
            dataIndex: 'mo_ta',
            key: 'mo_ta',
            ...getColumnSearchProps('mo_ta')
        },
        {
            title: 'Đơn giá',
            dataIndex: 'don_gia',
            key: 'don_gia',
        },
        {
            title: 'Ngày lập',
            dataIndex: 'ngay_lap',
            key: 'ngay_lap',
            ...getColumnSearchProps('ngay_lap')

        },
        {
            title: 'Nhân viên',
            dataIndex: 'staff',
            key: 'staff',
            ...getColumnSearchProps('staff')

        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            ellipsis: {
                showTitle: false,
            },
            render: (status) => (
                <Tag
                    color={status === 0 ? 'cyan' : status === 1 ? 'geekblue' : status === 2 ? 'green' : '#ff4d4f'}
                >
                    {
                        status == -1 ? "Đã từ chối"
                            : statusText[status]
                    }

                </Tag>
            ),
        }

    ]

    return (
        <>
            <Button onClick={() => setIsModalOpenFee(true)} className="btn-cyan" icon={<UsbFilled />} block>Chi phí mới</Button>

            <Card className="card-list">
                <Table columns={columns} dataSource={data}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: (event) => {
                                navigate(`/${url}/fee/${record._id}`)
                            }, // click row
                        }
                    }} />
            </Card>
            {isModalOpenFee ? <ModalAddFee open={isModalOpenFee} onCancel={() => setIsModalOpenFee(false)} /> : null}

        </>
    );
}

export default FeeList;