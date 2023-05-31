import { Button, Card, Input, Space, Table, Tag } from "antd";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { billService } from "~/services";
import { useToken } from "~/store";
import {
    UsbFilled,
    SearchOutlined
} from '@ant-design/icons';
import Highlighter from "react-highlight-words";
const statusText = ['Chưa thanh toán', 'Đã thanh toán', 'Đã kết toán']
const url = ['', 'admin', 'ke-toan']

function BillList() {

    let { id } = useParams();
    const { token } = useToken();
    const [bill, setBills] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    let navigate = useNavigate()


    useEffect(() => {
        const getBills = async () => {
            const result = (await billService.get()).data;
            const arr = id === 'all' ? result : result.filter(item => item.loai_hoa_don === id)
            setBills(arr);
        }
        getBills()
    }, [id])

    const data = bill.length > 0 ? bill.map((value, index) => {
        return {
            _id: value._id,
            index: index + 1,
            date: moment(value.ngay_lap).format('DD-MM-YYYY LT'),
            staff: value.nhan_vien_lap_hoa_don.ho_ten,
            total: `${value.tong_gia_tri}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' đ',
            status: value.status,
            type_bill: value.loai_hoa_don
        }
    }) : null

    const [filteredInfo, setFilteredInfo] = useState({});
    const handleChange = (filters) => {
        setFilteredInfo(filters);
      };
    
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
                    placeholder={ dataIndex == 'date' ? 'VD: 08-05-2023' : `Nhập từ khoá tìm kiếm`}
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
            dataIndex: 'index',
            key: 'index',
            width: 60
        },
        {
            title: 'Ngày lập hoá đơn',
            dataIndex: 'date',
            key: 'date',
            ...getColumnSearchProps('date')
        },
        {
            title: 'Nhân viên lập hoá đơn',
            dataIndex: 'staff',
            key: 'staff',
            ...getColumnSearchProps('staff')
        },
        {
            title: 'Tổng giá trị',
            dataIndex: 'total',
            key: 'total',
            ...getColumnSearchProps('total')
        },
        {
            title: 'Loại hoá đơn',
            dataIndex: 'type_bill',
            key: 'type_bill',
            filters: [
                {
                    text: 'Nội bộ',
                    value: 'NB'
                },
                {
                    text: 'Khách hàng',
                    value: 'KH'
                },
            ],
            onFilter: (value, record) => record.type_bill.startsWith(value),
            render: (type) => (
                <Tag
                    color={type == 'NB' ? 'volcano' :  'geekblue'}
                >
                   { type === 'NB' ? 'Nội bộ' : 'Khách hàng'}
                </Tag>
            )
        },
        // {
        //     title: 'Trạng thái',
        //     dataIndex: 'status',
        //     key: 'status',
        //     filters: [
        //         {
        //             text: 'Chưa thanh toán',
        //             value: 0,
        //         },
        //         {
        //             text: 'Đã thanh toán',
        //             value: 1,
        //         },
        //         {
        //             text: 'Đã kết toán',
        //             value: 2,
        //         },
        //     ],
        //     onFilter: (value, record) => record.status === value,
        //     render: (status) => (
        //         <Tag
        //             color={status === 0 ? 'volcano' : status === 1 ? 'green' : 'geekblue'}
        //         >
        //             {statusText[status]}
        //         </Tag>
        //     ),
        // }

    ]

    return (
        <> 
        <Link to={`/${url[token.account.quyen]}/bill/add/new`}>
                        <Button style={{ marginBottom: 20 }} className="btn-cyan" icon={<UsbFilled />} block>Hóa đơn mới</Button>
                    </Link>
        <Card className="card-list">
       
            <Table columns={columns} dataSource={data}
                onChange={handleChange}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            navigate(`/${url[token.account.quyen]}/bill/${record._id}`)
                        }, // click row
                    }
                }} />
        </Card>
        </>
    );
}

export default BillList;